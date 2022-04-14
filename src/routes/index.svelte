<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  
  export const load: Load = async ({ fetch }) => {
    let res = await fetch('./api/estampitancy');
    
    if (res.ok) {
      return {
        props: {
          products: await res.json()
        }
      };
    }
    return {
      status: res.status,
      error: new Error()
    };
  }
</script>

<script lang="ts">
  import Card from '../components/Card.svelte';
  import PrimaryButton from "../components/PrimaryButton.svelte";

  export let products: Stamp[] = [];
</script>

<section>
  {#each products as product}
    <Card {...product} />
  {/each}
</section>
<aside>
  <PrimaryButton shadow="0 0 10px rgba(0,0,0,0.5)">3 productos (total: $12)</PrimaryButton>
</aside>

<style>
  /* Blocks */
  section {
    padding: 16px;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 12px;
  }

  aside {
    position: sticky;
    bottom: 0;
    margin: auto;
    padding-bottom: 16px;
  }
</style>