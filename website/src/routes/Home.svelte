<script>
  import { H2, Code } from "toymorphism";
  import Toc from "toymorphism/components/Headings/Toc.svelte";

  import Header from "../containers/!Common/Header.svelte";
  import Philosophy from "../containers/Home/Philosophy.svelte";
  import AppFrame from "../containers/!Common/AppFrame.svelte";

  const headings = [
    {
      id: "philosophy",
      text: "Philosophy",
    },
    {
      id: "getting-started",
      text: "Getting started",
    },
  ];
</script>

<AppFrame>
  <Header />

  <div class="h2-wrapper">
    <H2 shape="float">Table of Contents</H2>
    <Toc {headings} />
  </div>

  <div class="h2-wrapper">
    <H2 shape="float" id={headings[0].id}>{headings[0].text}</H2>
    <Philosophy />
  </div>

  <div class="h2-wrapper">
    <H2 shape="float" id={headings[1].id}>{headings[1].text}</H2>
    <Code
      code={`npm install toymorphism`}
      frameColor={"white"}
      textColor={"black"}
    />
    <Code
      code={`// App.svelte\nimport { Button } from "toymorphism";\n\n<Button>Hello world</Button>`}
      frameColor={"white"}
      textColor={"black"}
    />
    <!-- Read more -->
  </div>
</AppFrame>

<style>
  .h2-wrapper {
    margin-top: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    place-items: center;
  }
</style>
