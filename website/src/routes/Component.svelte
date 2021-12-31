<script>
  import { onMount } from "svelte";

  import { components } from "toymorphism/dist/COMPONENT_API.json";
  import AppFrame from "../containers/!Common/AppFrame.svelte";
  import Header from "../containers/!Common/Header.svelte";
  import ComponentSample, {
    getDefaultProps,
  } from "./../containers/!Common/ComponentSample.svelte";

  export let params = {};
  // Input properties for forms
  let inputProps = {};
  // Actual properties to be sent to the component.
  let props = {};

  /**
   * @typedef {import("../types/sveld").ComponentProp} ComponentProp
   * @typedef {import("../types/sveld").UiProps} UiProps
   */

  $: component = components.find((item) => item.moduleName === params.name);

  /** @type {UiProps[]} */
  $: componentDefaultProps = JSON.parse(JSON.stringify(component.props)).map(
    (/** @type {ComponentProp} */ item) => {
      return {
        ...item,
        _inputType: getComponentInputType(item),
        _selectableValues: getSelectedValues(item),
        _value: convertDefaultValue(item),
      };
    }
  );

  // combine "component default props" & "website default props"
  $: defaultProps = {
    ...componentDefaultProps.reduce(
      (acc, cur) => ({ ...acc, [cur.name]: cur._value }),
      {}
    ),
    ...getDefaultProps(component),
  };

  $: {
    props = {
      ...defaultProps,
      ...Object.entries(inputProps).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value ?? defaultProps[key] }),
        {}
      ),
    };
  }

  onMount(() => {
    inputProps = {
      ...defaultProps,
    };
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
    <ComponentSample item={component} props={inputProps} />

    <form>
      {#each componentDefaultProps as prop}
        <label>
          {prop.name}:

          <!--
            for a11y-label-has-associated-control
            see more: https://github.com/sveltejs/svelte/issues/5300
          -->
          <input type="hidden" />

          {#if prop._inputType === "checkbox"}
            <input type="checkbox" bind:checked={inputProps[prop.name]} />
          {:else}
            <input type="text" bind:value={inputProps[prop.name]} />
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
