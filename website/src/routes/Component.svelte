<script>
  import { onMount } from "svelte";

  import { components } from "toymorphism/dist/COMPONENT_API.json";
  import AppFrame from "../containers/!Common/AppFrame.svelte";
  import Header from "../containers/!Common/Header.svelte";
  import ComponentSample from "./../containers/!Common/ComponentSample.svelte";

  export let params = {};

  /**
   * @typedef {import("../../types/sveld").ComponentProp} ComponentProp
   * @typedef {import("../../types/sveld").UiProps} UiProps
   */

  /** @type {UiProps[]} */
  let props = [];

  $: component = components.find((item) => item.moduleName === params.name);
  /** @type {ComponentProp[]} */
  $: defaultProps = JSON.parse(JSON.stringify(component.props));
  $: propsObj = props.reduce((acc, item) => {
    return {
      ...acc,
      [item.name]: item._value,
    };
  }, {});

  onMount(() => {
    props = defaultProps.map((/** @type {ComponentProp} */ item) => {
      return {
        ...item,
        _inputType: getComponentInputType(item),
        _selectableValues: getSelectedValues(item),
        _value: convertDefaultValue(item),
      };
    });
  });

  /**
   * @param {ComponentProp} item
   */
  function getComponentInputType(item) {
    switch (item.type) {
      case "boolean":
        return "checkbox";

      case "string":
      case `import("../../types/props.js").Thickness`:
      case `import("../../types/props.js").Color`:
        return "text";

      default:
        break;
    }

    return item.type;
  }

  /**
   * @param {ComponentProp} item
   */
  function getSelectedValues(item) {
    // TODO: set value

    return [item.type];
  }

  /**
   * @param {ComponentProp} item
   */
  function convertDefaultValue(item) {
    return eval(item.value);
  }
</script>

<AppFrame>
  <Header currentPage="components" />

  {#if component}
    <ComponentSample item={component} {...propsObj} />

    <form>
      {#each props as prop}
        <label>
          {prop.name}:

          <!--
            for a11y-label-has-associated-control
            see more: https://github.com/sveltejs/svelte/issues/5300
          -->
          <input type="hidden" />

          {#if prop._inputType === "checkbox"}
            <input type="checkbox" bind:checked={prop._value} />
          {:else}
            <input type="text" bind:value={prop._value} />
          {/if}
        </label>
      {/each}
    </form>
  {:else}
    <div>Not Found: {params.name}</div>
  {/if}
</AppFrame>

<style>
  form {
    display: grid;
    gap: 0.5rem;
  }
</style>
