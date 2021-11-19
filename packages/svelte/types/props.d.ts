export const TEXT_SHAPE = ["none", "solid", "float", "embossed"] as const;
export type TextShape = typeof TEXT_SHAPE[number];

export interface TocHeading {
  id: string;
  text: string;
  /** 1~6, or 0~ */
  level?: number;
}

/** 🚧warning🚧 currently over 3rem corrucpted
 * see: https://developer.mozilla.org/en-US/docs/Web/CSS/length */
export type Thickness = string;
/** see: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value */
export type Color = string;
/** see: https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
export type Padding = string;
/** see: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size */
export type FontSize = string;
