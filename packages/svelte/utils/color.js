import chroma from "chroma-js";

export function getLuminance(color) {
  return chroma(color).luminance();
}
