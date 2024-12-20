import Color from 'color';

const setAlpha = (baseColor: string, alpha: number) => Color(baseColor).alpha(alpha).string();

export default setAlpha;
