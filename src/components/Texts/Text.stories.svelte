<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Text from "./Text.svelte";
</script>

<Meta
  title="Texts/Text"
  component={Text}
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
  {#if args.message}
    <Text {...args}>{args.message}</Text>
  {:else if args.icon}
    <Text {...args}>
      <div>
        <i class="fas fa-paw" />
        <i class="fas fa-hippo" />
        <i class="fas fa-kiwi-bird" />
        <i class="fas fa-horse" />
      </div>
    </Text>
  {/if}
</Template>

<Story
  name="Hello world"
  args={{
    message: "Hello World | こんにちは世界",
    color: "#fc769f",
    attrs: {
      title: "Hello World text",
    },
  }}
/>

<Story
  name="Symbol & spetial character"
  args={{
    size: "1rem",
    color: "#fc769f",
    message: "1`˜!@#-$~%あநூந்सैसមួᏗᏍ백叢张夕張",
  }}
/>

<Story
  name="Big size character"
  args={{
    size: "5rem",
    color: "#fc769f",
    message: "1`˜!@#-$~%あநூந்सैसមួᏗᏍ백叢张夕張",
  }}
/>

<Story
  name="Font awesome"
  args={{
    size: "5rem",
    color: "#fc769f",
    icon: true,
  }}
/>
