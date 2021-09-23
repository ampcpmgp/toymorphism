<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Text from "./Text.svelte";
</script>

<Meta
  title="Texts/Text"
  component={Text}
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
  <Text {...args}>{args.message}</Text>
</Template>

<Story
  name="Hello world"
  args={{
    message: "Hello World",
  }}
/>

<Story
  name="Symbol & spetial character"
  args={{
    size: "5rem",
    message: "1`˜!@#-$~%あநூந்सैसមួᏗᏍ백叢张",
  }}
/>
