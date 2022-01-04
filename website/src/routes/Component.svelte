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

  // re-render if input values change
  // https://github.com/sveltejs/svelte/issues/4442
  let propsUpdated = Date.now();

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
        _defaultValue: convertDefaultValue(item),
      };
    }
  );
  $: defaultProps = getDefaultProps(component);

  $: {
    props = {
      ...defaultProps,
      ...Object.entries(inputProps).reduce((acc, [key, value]) => {
        // If input value is "", set it to undefined
        if (value === "") {
          value = undefined;
        }

        return {
          ...acc,
          [key]: value ?? defaultProps[key],
        };
      }, {}),
    };

    propsUpdated = Date.now();
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

      case `import("../../types/props").TocHeading[]`:
        return "textarea&object";

      case `import("../../types/props").MultilineText`:
        return "textarea";

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
    {#key propsUpdated}
      <ComponentSample item={component} {props} />
    {/key}

    <form style="width: 100%; display: grid; place-items:center;">
      {#each componentDefaultProps as prop}
        <label
          style="
        display: flex;
        width: 100%;
    "
        >
          {prop.name}:

          <!--
            for a11y-label-has-associated-control
            see more: https://github.com/sveltejs/svelte/issues/5300
          -->
          <input type="hidden" />

          {#if prop._inputType === "checkbox"}
            <input type="checkbox" bind:checked={inputProps[prop.name]} />
          {:else if prop._inputType === "textarea&object"}
            <textarea
              value={JSON.stringify(inputProps[prop.name], null, 2)}
              style="width: 100%;"
              rows="12"
              on:input={(e) => {
                inputProps[prop.name] = JSON.parse(e.currentTarget.value);
              }}
            />
          {:else if prop._inputType === "textarea"}
            <textarea
              bind:value={inputProps[prop.name]}
              style="width: 100%;"
              rows="6"
            />
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
