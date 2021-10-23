import { writable } from "svelte/store";

export const colors = writable({
  base: "#fc769f",
  text: "#333",
});

export const lengths = writable({
  /** @type {import("../types/props").Thickness} */
  thickness: "0.6rem",
});
