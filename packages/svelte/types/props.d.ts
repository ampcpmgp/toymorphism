export type TextShape = "none" | "solid-3d" | "float" | "embossed";

export interface TocHeading {
  id: string;
  text: string;
  /** 1~6, or 0~ */
  level?: number;
}

/** !warning! currently over 3rem corrucpted
 * see: https://developer.mozilla.org/en-US/docs/Web/CSS/length */
export type Thickness = string;
