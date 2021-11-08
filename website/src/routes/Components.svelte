<script>
  import { components } from "toymorphism/dist/COMPONENT_API.json";
  import AppFrame from "../containers/!Common/AppFrame.svelte";
  import Header from "../containers/!Common/Header.svelte";
  import Sample from "../containers/Components/Sample.svelte";
</script>

<AppFrame>
  <Header currentPage="components" />

  <div class="wrapper">
    {#each components as item}
      <div class="compornent">
        <Sample {item} />
        <span class="item">
          {item.moduleName}
        </span>
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
