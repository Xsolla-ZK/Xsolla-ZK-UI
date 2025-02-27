import Color from 'color';
import { withoutEmpty } from './helpers.mjs';

/**
 * @param {string} expression
 * @returns {number}
 */
function resolveMath(expression) {
  const cleanExpr = expression.replace(/\s+/g, '');

  if (!/[+\-*/]/.test(cleanExpr)) {
    return Number(cleanExpr);
  }

  const result = cleanExpr
    .split(/([+\-*/])/)
    .map((part) => part.trim())
    .reduce((acc, curr, idx, arr) => {
      if (idx === 0) return Number(curr);

      const operator = arr[idx - 1];
      const value = Number(curr);

      switch (operator) {
        case '+':
          return acc + value;
        case '-':
          return acc - value;
        case '*':
          return acc * value;
        case '/':
          return acc / value;
        default:
          return acc;
      }
    });

  return result;
}

/**
 * @param {string} expression
 * @param {object} obj
 * @param {Set<string>} [visitedRefs]
 * @returns {string}
 */
function resolveReferences(expression, obj, visitedRefs = new Set()) {
  const references = expression.match(/{[^}]+}/g) || [];

  let resolvedExpression = expression;
  for (const ref of references) {
    if (visitedRefs.has(ref)) {
      return expression;
    }

    visitedRefs.add(ref);

    const value = getValueByPath(obj, ref, visitedRefs);
    if (typeof value !== 'number') {
      return expression;
    }
    resolvedExpression = resolvedExpression.replace(ref, value);
  }

  return resolvedExpression;
}

/**
 * @param {object} obj
 * @param {string} path
 * @param {Set<string>} [visitedRefs]
 * @returns {string | number}
 */
export function getValueByPath(obj, path, visitedRefs = new Set()) {
  const o = obj;

  if (/[+\-*/]/.test(path)) {
    if (/{[^}]+}/.test(path)) {
      const resolvedExpression = resolveReferences(path, obj, visitedRefs);
      if (resolvedExpression !== path && /^[0-9+\-*/.() ]+$/.test(resolvedExpression)) {
        return resolveMath(resolvedExpression);
      }
    }
  }

  const colorFnMatch = path.match(/(rgb|rgba|hsl|hsla|hwb)\((.*?)\)/);
  if (colorFnMatch) {
    const [_, _colorModel, values] = colorFnMatch;
    const [currentColor, opacity] = values.split(',').map((value) => {
      if (value.includes('{')) {
        const pathValue = value.trim();
        return getValueByPath(obj, pathValue, visitedRefs);
      }
      return value;
    });

    try {
      const resultColor = Color(currentColor);
      if (opacity) {
        return resultColor.alpha(opacity).toString();
      }
      return resultColor.toString();
    } catch (e) {
      return path;
    }
  }

  const result = path
    .replace(/{|}/g, '')
    .split('.')
    .reduce((acc, key) => (acc ? acc[key] : undefined), o);

  if (!result) return path;

  if (typeof result.value === 'string' && result.value.includes('{')) {
    return getValueByPath(obj, result.value, visitedRefs);
  }

  switch (result.type) {
    case 'number':
    case 'opacity':
      if (typeof result.value === 'string' && /[+\-*/]/.test(result.value)) {
        return resolveMath(result.value);
      }
      return Number(result.value);
    default:
      return result.value;
  }
}

export function getValueRecursively(obj, sources) {
  if (obj && typeof obj === 'object' && 'type' in obj) {
    if (obj.description === 'figma-only') {
      return null;
    }

    if (obj.type === 'boxShadow' || obj.value.type === 'dropShadow') {
      const { x, y, blur, spread, color } = obj.value;
      const resolvedColor = /{|}/g.test(color) ? getValueByPath(sources, color) : color;
      return `${x}px ${y}px ${blur}px ${spread}px ${resolvedColor}`;
    }
    if (obj.type === 'typography') {
      const { fontFamily, fontWeight, fontSize, lineHeight } = obj.value;

      const resolvedValues = {
        fontFamily: getValueByPath(sources, fontFamily),
        fontWeight: getValueByPath(sources, fontWeight),
        fontSize: getValueByPath(sources, fontSize),
        lineHeight: getValueByPath(sources, lineHeight),
      };

      return `${resolvedValues.fontWeight} ${resolvedValues.fontSize}px/${resolvedValues.lineHeight}px ${resolvedValues.fontFamily}`;
    }
    if (/{|}/g.test(obj.value)) {
      return getValueByPath(sources, obj.value);
    }

    return obj.type === 'number' || obj.type === 'opacity' ? Number(obj.value) : obj.value;
  }

  if (obj && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      const val = getValueRecursively(value, sources);
      if (val !== null) {
        result[key] = val;
      }
    }
    return withoutEmpty(result);
  }

  return obj;
}
