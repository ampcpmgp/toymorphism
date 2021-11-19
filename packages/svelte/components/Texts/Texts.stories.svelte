<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Text from "./Text.svelte";
</script>

<Meta
  title="Texts/Texts"
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
  <div style="display: grid;">
    <Text color="#fc769f" shape="none">
      {args.message}
    </Text>
    <Text color="#fc769f" shape="solid">
      {args.message}
    </Text>
    <Text color="#fc769f" shape="float">
      {args.message}
    </Text>
    <Text color="#fc769f" shape="embossed">
      {args.message}
    </Text>

    <hr />

    <Text size="2rem" color="#fc769f" shape="none">
      {args.message}
    </Text>
    <Text size="2rem" color="#fc769f" shape="solid">
      {args.message}
    </Text>
    <Text size="2rem" color="#fc769f" shape="float">
      {args.message}
    </Text>
    <Text size="2rem" color="#fc769f" shape="embossed">
      {args.message}
    </Text>
  </div>
</Template>

<Story
  name="Normal"
  args={{
    message: "Hello World | こんにちは世界 | ☀️🔆🥳",
  }}
/>
