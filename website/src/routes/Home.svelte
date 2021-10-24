<script>
  import { colors, Frame, H1, Toc, H2, Code } from "toymorphism";
  import Header from "../containers/!Common/Header.svelte";
  import Footer from "../containers/!Common/Footer.svelte";
  import { version } from "toymorphism/package.json";
  import Philosophy from "../containers/Home/Philosophy.svelte";

  $colors.base = "lightgreen";

  const headings = [
    {
      id: "philosophy",
      text: "Philosophy",
    },
    {
      id: "get-started",
      text: "Get started",
    },
  ];
</script>

<Frame gap="1.5rem" padding="1rem" frameColor="lightgoldenrodyellow">
  <H1 shape="embossed">Toymorphism {version}</H1>
  <Header />

  <div class="h2-wrapper">
    <H2 shape="float">Table of Contents</H2>
    <Toc {headings} />
  </div>

  <div class="h2-wrapper">
    <H2 shape="float" attrs={{ id: headings[0].id }}>{headings[0].text}</H2>
    <Philosophy />
  </div>

  <div class="h2-wrapper">
    <H2 shape="float" attrs={{ id: headings[1].id }}>{headings[1].text}</H2>
    <Code
      code={`npm install toymorphism`}
      frameColor={"white"}
      textColor={"black"}
    />
  </div>

  <Footer />
</Frame>

<style>
  .h2-wrapper {
    margin-top: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    place-items: center;
  }
</style>
