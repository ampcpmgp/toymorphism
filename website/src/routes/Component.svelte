<script>
  import { onMount } from "svelte";

  import { components } from "toymorphism/dist/COMPONENT_API.json";
  import AppFrame from "../containers/!Common/AppFrame.svelte";
  import Header from "../containers/!Common/Header.svelte";
  import {
    getComponentInputType,
    getDefaultValue,
    getDescription,
    getSelectedValues,
  } from "../utils/component";
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
        _defaultValue: getDefaultValue(item),
        _description: getDescription(item),
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
</script>

<AppFrame>
  <Header currentPage="components" />

  {#if component}
    {#key propsUpdated}
      <div style="display:grid;place-items:center;gap: 1rem;">
        <ComponentSample item={component} {props} />
      </div>
    {/key}

    <form
      style="display: grid; grid-template-columns: auto auto 1fr 40%; gap: 1rem;"
    >
      <div style="font-weight: bold;">Name</div>
      <div style="font-weight: bold;">Value</div>
      <div style="font-weight: bold;">Default</div>
      <div style="font-weight: bold;">Description</div>

      {#each componentDefaultProps as prop}
        <label for={prop.name}>
          {prop.name}
        </label>

        {#if prop._inputType === "checkbox"}
          <input
            id={prop.name}
            type="checkbox"
            bind:checked={inputProps[prop.name]}
          />
        {:else if prop._inputType === "textarea&object"}
          <textarea
            id={prop.name}
            value={JSON.stringify(inputProps[prop.name], null, 2)}
            style="width: 100%;"
            rows="12"
            on:input={(e) => {
              inputProps[prop.name] = JSON.parse(e.currentTarget.value);
            }}
          />
        {:else if prop._inputType === "textarea"}
          <textarea
            id={prop.name}
            bind:value={inputProps[prop.name]}
            style="width: 100%;"
            rows="6"
          />
        {:else if prop._inputType === "select"}
          <select id={prop.name} bind:value={inputProps[prop.name]}>
            {#each prop._selectableValues as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        {:else}
          <input
            style="align-self: start;"
            id={prop.name}
            type="text"
            bind:value={inputProps[prop.name]}
          />
        {/if}

        <div style=" word-break: break-all;">{prop._defaultValue}</div>
        <div style="white-space: pre-wrap; word-break: break-all;">
          {@html prop._description}
        </div>
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
