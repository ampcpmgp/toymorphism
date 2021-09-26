<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Link from "./Link.svelte";
</script>

<Meta
  title="Links/Link"
  component={Link}
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
  <Link {...args}>{args.message}</Link>
</Template>

<Story
  name="Hello world"
  args={{
    message: "Hello World | こんにちは世界",
    color: "#fc769f",
    attrs: {
      href: "//example.com",
      target: "_blank",
    },
  }}
/>
