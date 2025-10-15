import fse from 'fs-extra';
import path from 'path';
import { writeToBuildDir } from './files.mjs';
import generateSimpleFile from '../templates/simple.mjs';
import { logger } from './log.mjs';
import { getShapesPath, kebabize } from './helpers.mjs';

/**
 * Formats a number for SVG path, removing unnecessary decimals
 * @param {number} num - Number to format
 * @returns {string}
 */
function formatNumber(num) {
  // Round to 4 decimal places and remove trailing zeros
  const rounded = Math.round(num * 10000) / 10000;
  return rounded.toString();
}

/**
 * Converts SVG shape to path "d"
 * @param {Object} shape - Shape object with attributes
 * @param {Object} _svgMeta - { width, height, viewBox: {x, y, width, height} } (unused, but kept for compatibility)
 * @returns {string|null}
 */
function shapeToPath(shape, _svgMeta) {
  const tag = shape.type;
  if (!tag) return null;

  const getAttr = (name) => parseFloat(shape[name] || 0);

  // Magic number for Bezier curve approximation of a circle
  const KAPPA = 0.5522847498;

  const fmt = formatNumber;

  switch (tag) {
    case 'circle': {
      const cx = getAttr('cx');
      const cy = getAttr('cy');
      const r = getAttr('r');

      const k = r * KAPPA;

      return [
        `M${fmt(cx + r)} ${fmt(cy)}`,
        `C${fmt(cx + r)} ${fmt(cy + k)} ${fmt(cx + k)} ${fmt(cy + r)} ${fmt(cx)} ${fmt(cy + r)}`,
        `C${fmt(cx - k)} ${fmt(cy + r)} ${fmt(cx - r)} ${fmt(cy + k)} ${fmt(cx - r)} ${fmt(cy)}`,
        `C${fmt(cx - r)} ${fmt(cy - k)} ${fmt(cx - k)} ${fmt(cy - r)} ${fmt(cx)} ${fmt(cy - r)}`,
        `C${fmt(cx + k)} ${fmt(cy - r)} ${fmt(cx + r)} ${fmt(cy - k)} ${fmt(cx + r)} ${fmt(cy)}`,
        'Z',
      ].join(' ');
    }

    case 'ellipse': {
      const cx = getAttr('cx');
      const cy = getAttr('cy');
      const rx = getAttr('rx');
      const ry = getAttr('ry');

      const kx = rx * KAPPA;
      const ky = ry * KAPPA;

      return [
        `M${fmt(cx + rx)} ${fmt(cy)}`,
        `C${fmt(cx + rx)} ${fmt(cy + ky)} ${fmt(cx + kx)} ${fmt(cy + ry)} ${fmt(cx)} ${fmt(cy + ry)}`,
        `C${fmt(cx - kx)} ${fmt(cy + ry)} ${fmt(cx - rx)} ${fmt(cy + ky)} ${fmt(cx - rx)} ${fmt(cy)}`,
        `C${fmt(cx - rx)} ${fmt(cy - ky)} ${fmt(cx - kx)} ${fmt(cy - ry)} ${fmt(cx)} ${fmt(cy - ry)}`,
        `C${fmt(cx + kx)} ${fmt(cy - ry)} ${fmt(cx + rx)} ${fmt(cy - ky)} ${fmt(cx + rx)} ${fmt(cy)}`,
        'Z',
      ].join(' ');
    }

    case 'rect': {
      const x = getAttr('x');
      const y = getAttr('y');
      const w = getAttr('width');
      const h = getAttr('height');
      const rx = getAttr('rx') || getAttr('ry') || 0;
      const ry = getAttr('ry') || getAttr('rx') || 0;

      const actualRx = Math.min(rx, w / 2);
      const actualRy = Math.min(ry, h / 2);

      if (actualRx > 0 || actualRy > 0) {
        const kx = actualRx * KAPPA;
        const ky = actualRy * KAPPA;

        return [
          `M${fmt(x + actualRx)} ${fmt(y)}`,
          `L${fmt(x + w - actualRx)} ${fmt(y)}`,
          `C${fmt(x + w - actualRx + kx)} ${fmt(y)} ${fmt(x + w)} ${fmt(y + actualRy - ky)} ${fmt(x + w)} ${fmt(y + actualRy)}`,
          `L${fmt(x + w)} ${fmt(y + h - actualRy)}`,
          `C${fmt(x + w)} ${fmt(y + h - actualRy + ky)} ${fmt(x + w - actualRx + kx)} ${fmt(y + h)} ${fmt(x + w - actualRx)} ${fmt(y + h)}`,
          `L${fmt(x + actualRx)} ${fmt(y + h)}`,
          `C${fmt(x + actualRx - kx)} ${fmt(y + h)} ${fmt(x)} ${fmt(y + h - actualRy + ky)} ${fmt(x)} ${fmt(y + h - actualRy)}`,
          `L${fmt(x)} ${fmt(y + actualRy)}`,
          `C${fmt(x)} ${fmt(y + actualRy - ky)} ${fmt(x + actualRx - kx)} ${fmt(y)} ${fmt(x + actualRx)} ${fmt(y)}`,
          'Z',
        ].join(' ');
      } else {
        return `M${fmt(x)} ${fmt(y)} L${fmt(x + w)} ${fmt(y)} L${fmt(x + w)} ${fmt(y + h)} L${fmt(x)} ${fmt(y + h)} Z`;
      }
    }

    case 'line': {
      const x1 = getAttr('x1');
      const y1 = getAttr('y1');
      const x2 = getAttr('x2');
      const y2 = getAttr('y2');
      return `M${fmt(x1)} ${fmt(y1)} L${fmt(x2)} ${fmt(y2)}`;
    }

    case 'polygon':
    case 'polyline': {
      const raw = shape.points || '';
      const pts = raw
        .trim()
        .split(/[\s,]+/)
        .map(parseFloat);
      if (pts.length < 2) return '';

      const commands = [];
      for (let i = 0; i < pts.length; i += 2) {
        commands.push(`${i === 0 ? 'M' : 'L'}${fmt(pts[i])} ${fmt(pts[i + 1])}`);
      }
      if (tag === 'polygon') commands.push('Z');
      return commands.join(' ');
    }

    default:
      return null;
  }
}

/**
 * Extracts the 'd' attribute value from path element in SVG
 * @param {string} svgContent - SVG file content
 * @returns {string|null} Value of 'd' attribute or null
 */
function extractPathFromSvg(svgContent) {
  const pathRegex = /<path[^>]*\sd\s*=\s*["']([^"']*)["'][^>]*>/i;
  const match = pathRegex.exec(svgContent);
  return match ? match[1] : null;
}

/**
 * Extracts SVG shapes from all files in directory
 * @param {string} directoryPath - Path to directory with SVG files
 * @returns {Promise<Object>} Object where key is kebab-case filename without extension, value is path string
 */
export async function extractShapes(directoryPath) {
  const results = {};

  try {
    // Check if the directory exists
    if (!(await fse.pathExists(directoryPath))) {
      logger.warning(`Directory not found: ${directoryPath}. Skipping.`);
      return results;
    }

    // Read the content of the directory
    const files = await fse.readdir(directoryPath);

    // Filter only SVG files
    const svgFiles = files.filter((file) => path.extname(file).toLowerCase() === '.svg');

    if (svgFiles.length === 0) {
      logger.warning(`SVG files not found in the directory: ${directoryPath}. Skipping.`);
      return results;
    }

    // Process each SVG file
    for (const fileName of svgFiles) {
      const filePath = path.join(directoryPath, fileName);

      try {
        // Read the content of the file
        const svgContent = await fse.readFile(filePath, 'utf8');

        // First try to extract path directly
        let pathData = extractPathFromSvg(svgContent);

        // If path not found, try to convert other shapes
        if (!pathData) {
          pathData = convertShapeToPath(svgContent);
        }

        // Save the result with kebab-case key without extension
        if (pathData) {
          const baseName = path.basename(fileName, '.svg');
          const key = kebabize(baseName);
          results[key] = pathData;
        } else {
          logger.warning(`Failed to extract path from file ${fileName}`);
        }
      } catch (error) {
        logger.error(`Error processing file ${fileName}:`, error.message);
        // Continue processing other files
      }
    }

    logger.info(`Processed ${svgFiles.length} SVG files in the directory ${directoryPath}`);
  } catch (error) {
    logger.error('Error processing directory:', error.message);
  }
  return results;
}

/**
 * Extracts attribute from SVG string
 * @param {string} content - SVG content
 * @param {string} attrName - Attribute name
 * @returns {string|null}
 */
function extractAttribute(content, attrName) {
  const regex = new RegExp(`${attrName}\\s*=\\s*["']([^"']*?)["']`, 'i');
  const match = content.match(regex);
  return match ? match[1] : null;
}

/**
 * Extracts shape element from SVG
 * @param {string} svgContent - SVG file content
 * @param {string} tagName - Tag name (circle, rect, etc.)
 * @returns {Object|null} Object with attributes or null
 */
function extractShapeElement(svgContent, tagName) {
  const regex = new RegExp(`<${tagName}([^>]*)>`, 'i');
  const match = svgContent.match(regex);
  if (!match) return null;

  const attrs = match[1];
  const attrNames = {
    circle: ['cx', 'cy', 'r'],
    ellipse: ['cx', 'cy', 'rx', 'ry'],
    rect: ['x', 'y', 'width', 'height', 'rx', 'ry'],
    line: ['x1', 'y1', 'x2', 'y2'],
    polygon: ['points'],
    polyline: ['points'],
  };

  const result = { type: tagName };
  const names = attrNames[tagName] || [];

  for (const name of names) {
    const value = extractAttribute(attrs, name);
    if (value !== null) {
      result[name] = value;
    }
  }

  return result;
}

/**
 * Converts SVG shapes (circle, rect, etc.) to path
 * @param {string} svgContent - SVG file content
 * @returns {string|null} Path string or null
 */
function convertShapeToPath(svgContent) {
  try {
    // Extract SVG metadata
    const svgMatch = svgContent.match(/<svg([^>]*)>/i);
    if (!svgMatch) return null;

    const svgAttrs = svgMatch[1];
    const width = parseFloat(extractAttribute(svgAttrs, 'width') || '80');
    const height = parseFloat(extractAttribute(svgAttrs, 'height') || '80');
    const viewBoxAttr = extractAttribute(svgAttrs, 'viewBox');

    let viewBox = null;
    if (viewBoxAttr) {
      const [x, y, w, h] = viewBoxAttr.split(/[\s,]+/).map(parseFloat);
      viewBox = { x, y, width: w, height: h };
    }

    const svgMeta = { width, height, viewBox };

    // Find first shape for conversion
    const shapes = ['circle', 'ellipse', 'rect', 'line', 'polygon', 'polyline'];
    for (const shape of shapes) {
      const element = extractShapeElement(svgContent, shape);
      if (element) {
        return shapeToPath(element, svgMeta);
      }
    }

    return null;
  } catch (error) {
    logger.error('Error converting shape to path:', error.message);
    return null;
  }
}

/**
 * Extracts path from a single SVG file
 * @param {string} filePath - Path to SVG file
 * @returns {Promise<string>} Path string
 */
export async function extractShapesFromFile(filePath) {
  try {
    if (!(await fse.pathExists(filePath))) {
      logger.warning(`File not found: ${filePath}. Skipping.`);
      return '';
    }

    const svgContent = await fse.readFile(filePath, 'utf8');

    // First try to extract path directly
    let pathData = extractPathFromSvg(svgContent);

    // If path not found, try to convert other shapes
    if (!pathData) {
      pathData = convertShapeToPath(svgContent);
    }

    return pathData || '';
  } catch (error) {
    logger.error(`Error processing file ${filePath}:`, error.message);
    return '';
  }
}

/**
 * Extracts shapes from a directory and writes the result to the build directory
 * @returns {Promise<void>}
 */
export async function processAndWriteShapes() {
  const directoryPath = getShapesPath();
  try {
    const shapes = await extractShapes(directoryPath);

    if (Object.keys(shapes).length === 0) {
      logger.warning('No shapes found for writing');
      return;
    }

    // Write the result to the build directory
    await writeToBuildDir('shapes', generateSimpleFile(shapes, 'shapes'));

    const totalShapes = Object.keys(shapes).length;
    logger.success(`Written ${totalShapes} shapes from ${totalShapes} files`);
  } catch (error) {
    logger.error('Error processing and writing shapes:', error.message);
  }
}
