import Color from 'color';
// import type ColorParam from 'color';

type BlendMode = 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge';

function colorBlend(color1: string, color2: string, mode: BlendMode) {
  const normalize = (value: number) => value / 255;
  const denormalize = (value: number) => Math.round(Math.min(Math.max(value, 0), 1) * 255);

  const blend = (c1: number, c2: number, mode: BlendMode): number => {
    const n1 = normalize(c1);
    const n2 = normalize(c2);

    switch (mode) {
      case 'multiply':
        return n1 * n2;
      case 'screen':
        return n1 + n2 - n1 * n2;
      case 'overlay':
        return n1 <= 0.5 ? 2 * n1 * n2 : 1 - 2 * (1 - n1) * (1 - n2);
      case 'darken':
        return Math.min(n1, n2);
      case 'lighten':
        return Math.max(n1, n2);
      case 'color-dodge':
        return n2 === 1 ? 1 : Math.min(n1 / (1 - n2), 1);
      default:
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unknown blend mode: ${mode}`);
    }
  };

  const c1 = Color(color1);
  const c2 = Color(color2);

  return Color.rgb([
    denormalize(blend(c1.red(), c2.red(), mode)),
    denormalize(blend(c1.green(), c2.green(), mode)),
    denormalize(blend(c1.blue(), c2.blue(), mode)),
  ]).hex();
}

export default colorBlend;
