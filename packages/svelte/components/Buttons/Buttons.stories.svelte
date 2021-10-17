<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta
  title="Buttons/Buttons"
  component={Button}
  parameters={{
    backgrounds: {
      default: "gray",
    },
  }}
  argTypes={{
    baseColor: {
      control: {
        type: "color",
      },
    },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <div class="wrapper">
    <Button {...args} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"red"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"#ff4a4a"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"blue"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"#0094ff"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"#5258a3"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"green"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"yellow"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"teal"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"aqua"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"darkviolet"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"gold"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"lawngreen"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"tomato"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"plum"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"lightyellow"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"khaki"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"black"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"gray"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
    <Button {...args} baseColor={"white"} on:click={args.onClick}>
      <div class="text">{args.text}</div>
    </Button>
  </div>
</Template>

<Story
  name="Various colors"
  args={{
    text: "😀👍🙆‍♀️🙋‍♂️",
  }}
/>

<style>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 10px;
  }

  .text {
    font-size: 1.5rem;
    margin: 0.5rem 0.6rem;
  }
</style>
