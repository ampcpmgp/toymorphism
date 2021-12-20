import Home from "./Home.svelte";
import Components from "./Components.svelte";
import Documents from "./Documents.svelte";
import NotFound from "./NotFound.svelte";

export default {
  "/": Home,
  "/components": Components,
  "/components-in-page-link/*": Components,
  "/documents": Documents,
  "*": NotFound,
};
