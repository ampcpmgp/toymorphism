import Home from "./Home.svelte";
import Components from "./Components.svelte";
import Component from "./Component.svelte";
import Documents from "./Documents.svelte";
import NotFound from "./NotFound.svelte";

export default {
  "/": Home,
  "/components/:name": Component,
  "/components": Components,
  "/documents": Documents,
  "*": NotFound,
};
