import { TEXT_SHAPE } from "toymorphism/types/props.d";

/**
 * @typedef {import("../types/sveld").ComponentProp} ComponentProp
 * @typedef {import("../types/sveld").UiProps} UiProps
 */

/**
 * @param {ComponentProp} item
 */
export function getComponentInputType(item) {
  switch (item.type) {
    case "boolean":
      return "checkbox";

    case `import("../../types/props").TocHeading[]`:
      return "textarea&object";

    case `import("../../types/props").MultilineText`:
      return "textarea";

    case `import("../../types/props").TextShape`:
      return "select";

    case "string":
    case `import("../../types/props").Thickness`:
    case `import("../../types/props").Color`:
    default:
      return "text";
  }
}

/**
 * @param {ComponentProp} item
 */
export function getSelectedValues(item) {
  switch (item.type) {
    case `import("../../types/props").TextShape`:
      return TEXT_SHAPE;

    default:
      return [];
  }
}

/**
 * @param {ComponentProp} item
 */
export function getDefaultValue(item) {
  switch (item.type) {
    case "value":
      return "";

    default:
      return item.value === undefined ? "" : eval(item.value);
  }
}

/**
 * @param {ComponentProp} item
 */
export function getDescription(item) {
  // TODO: convert link to anchor tag
  return item.description ?? "";
}
