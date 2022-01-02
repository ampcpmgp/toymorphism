<script>
  import { components } from "toymorphism/dist/COMPONENT_API.json";
  import AppFrame from "../containers/!Common/AppFrame.svelte";
  import Header from "../containers/!Common/Header.svelte";
  import ComponentSample, {
    getDefaultProps,
  } from "../containers/!Common/ComponentSample.svelte";

  const sorted = components.sort((a, b) => {
    if (a.filePath < b.filePath) return -1;
    if (a.filePath > b.filePath) return 1;
    return 0;
  });
</script>

<AppFrame>
  <Header currentPage="components" />

  <div class="wrapper">
    {#each sorted as item}
      <div class="compornent">
        <ComponentSample {item} props={getDefaultProps(item)} />
        <a
          href={`#/components/${item.moduleName}`}
          class="item"
          title={item.moduleName}
        >
          <span
            style="text-overflow: ellipsis; max-width: 100%; overflow: hidden; padding: 0 0.25rem;"
          >
            {item.moduleName}
          </span>
        </a>
      </div>
    {/each}
  </div>
</AppFrame>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    margin: auto;
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fill, 10rem);
    grid-auto-rows: 9rem;
  }

  .compornent {
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin: 1rem;
  }

  .item {
    display: flex;
    place-content: center;
    width: 100%;
    border-top: solid 1px #ccc;
    color: #555;
  }
</style>
