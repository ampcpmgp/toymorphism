import chroma from "chroma-js";

export function getLuminance(color) {
  return chroma(color).luminance();
}

/**
 * @param {string} color
 */
export function getBaseColors(color) {
  const chromaColor = chroma(color);
  const sideColor = chroma.mix(color, "black", 0.4).hex();
  const lightColor = chromaColor.brighten(1.5).hex();
  const bottomColor = chroma.mix(color, "black", 0.6).hex();

  return {
    sideColor,
    lightColor,
    bottomColor,
  };
}

/**
 * @param {string} color
 */
export function getTextColors(color) {
  const chromaColor = chroma(color);
  const luminance = chromaColor.luminance();
  const isBlack = luminance < 0.01;

  const sideColor = chroma.mix(color, isBlack ? "#444" : "black", 0.3).hex();
  const bottomColor = chroma.mix(color, isBlack ? "#444" : "black", 0.4).hex();

  return {
    sideColor,
    bottomColor,
  };
}
