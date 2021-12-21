<script>
  import AppFrame from "../containers/!Common/AppFrame.svelte";
  import Header from "../containers/!Common/Header.svelte";

  export let params = {};
</script>

<AppFrame>
  <Header currentPage="components" />

  <div>{params.name}</div>
</AppFrame>
