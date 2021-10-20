export type TextShape = "none" | "solid-3d" | "float" | "embossed";

export interface TocHeading {
  id: string;
  text: string;
  /** 1~6, or 0~ */
  level?: number;
}
