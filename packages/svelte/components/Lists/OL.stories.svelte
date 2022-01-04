<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import OLItem from "./OLItem.svelte";
  import OL from "./OL.svelte";
</script>

<Meta
  title="Lists/OL"
  component={OL}
  parameters={{
    backgrounds: {
      default: "white",
    },
  }}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<Template>
  <OL>
    <OLItem>OLItem Item</OLItem>
    <OLItem>OLItem Item</OLItem>
    <OLItem>OLItem Item</OLItem>
    <OLItem>OLItem Item</OLItem>
    <OL>
      <OLItem>OLItem Item</OLItem>
      <OLItem>OLItem Item</OLItem>
      <OL>
        <OLItem>OLItem Item</OLItem>
      </OL>
    </OL>
    <OLItem>OLItem Item</OLItem>
    <OLItem>OLItem Item</OLItem>
    <OLItem>OLItem Item</OLItem>
    <OL>
      <OLItem>OLItem Item</OLItem>
    </OL>
  </OL>

  <br />

  <OL>
    <OLItem>OLItem Item</OLItem>
    <OL>
      <OLItem>OLItem Item</OLItem>
      <OLItem>OLItem Item</OLItem>
    </OL>
    <OLItem>OLItem Item</OLItem>
  </OL>
</Template>

<Story name="Default" args={{}} />
