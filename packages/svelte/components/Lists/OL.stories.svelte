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

<Template let:args>
  <OL hierarchy let:cid>
    <OLItem {cid} {...args}>OLItem Item</OLItem>
    <OLItem {cid} {...args}>OLItem Item</OLItem>
    <OLItem {cid} {...args}>OLItem Item</OLItem>
    <OLItem {cid} {...args}>OLItem Item</OLItem>
    <OL hierarchy let:cid>
      <OLItem {cid} {...args}>OLItem Item</OLItem>
      <OLItem {cid} {...args}>OLItem Item</OLItem>
      <OL hierarchy let:cid>
        <OLItem {cid} {...args}>OLItem Item</OLItem>
      </OL>
    </OL>
    <OLItem {cid} {...args}>OLItem Item</OLItem>
    <OLItem {cid} {...args}>OLItem Item</OLItem>
    <OLItem {cid} {...args}>OLItem Item</OLItem>
    <OL let:cid>
      <OLItem {cid} {...args}>OLItem Item</OLItem>
    </OL>
  </OL>

  <OL>
    <OLItem>OLItem Item</OLItem>
    <OLItem>OLItem Item</OLItem>
  </OL>

  <OL>
    <OLItem>OLItem Item</OLItem>
    <OLItem>OLItem Item</OLItem>
  </OL>
</Template>

<Story name="Default" args={{}} />
