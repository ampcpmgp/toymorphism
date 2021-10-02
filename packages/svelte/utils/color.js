import chroma from "chroma-js";

/**
 * @param {string} color
 */
export function getBaseColors(color) {
  const chromaColor = chroma(color);
  const luminance = chromaColor.luminance();
  const isDark = luminance < 0.01;

  const sideColor = chroma.mix(color, isDark ? "#333" : "black", 0.4).hex();
  const topLightColor = chromaColor.brighten(1.5).hex();
  const bottomColor = chroma.mix(color, isDark ? "#333" : "black", 0.6).hex();

  return {
    sideColor,
    topLightColor,
    bottomColor,
  };
}

/**
 * @param {string} color
 */
export function getTextColors(color) {
  const chromaColor = chroma(color);
  const luminance = chromaColor.luminance();
  const isDark = luminance < 0.01;

  const sideColor = chroma.mix(color, isDark ? "#333" : "black", 0.3).hex();
  const bottomColor = chroma.mix(color, isDark ? "#333" : "black", 0.4).hex();

  return {
    sideColor,
    bottomColor,
  };
}
