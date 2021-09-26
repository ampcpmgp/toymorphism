import { writable } from "svelte/store";

export const colors = writable({
  base: "#000",
  text: "#fff",
});
