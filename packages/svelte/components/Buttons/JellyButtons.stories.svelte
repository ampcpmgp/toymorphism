<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import JellyButton from "./JellyButton.svelte";
</script>

<Meta
  title="Buttons/JellyButtons"
  component={JellyButton}
  parameters={{
    backgrounds: {
      default: "gray",
    },
  }}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <div class="wrapper">
    <JellyButton {...args} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"red"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"#ff4a4a"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"blue"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"#0094ff"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"#5258a3"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"green"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"yellow"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"teal"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"aqua"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"darkviolet"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"gold"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"lawngreen"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"tomato"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"plum"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"lightyellow"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"khaki"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"black"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"gray"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
    <JellyButton {...args} baseColor={"white"} on:click={args.onClick}>
      {args.text}
    </JellyButton>
  </div>
</Template>

<Story
  name="Various colors"
  args={{
    text: "Jelly Button",
    fontSize: "1rem",
    padding: "1.4rem",
  }}
/>

<style>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
