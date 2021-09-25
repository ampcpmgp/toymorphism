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
    message: "Hello World",
  }}
/>

<Story
  name="Symbol & spetial character"
  args={{
    size: "5rem",
    message: "1`˜!@#-$~%あநூந்सैसមួᏗᏍ백叢张夕張",
  }}
/>

<Story
  name="Font awesome"
  args={{
    size: "5rem",
    icon: true,
  }}
/>
