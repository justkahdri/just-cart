<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  
  export const load: Load = async ({ fetch }) => {
    let res = await fetch("./api/estampitancy");
  
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
  };
</script>

<script lang="ts">
  import { cart, total } from "@justkahdri/cart-store";
  import Product from "@model/product";
  import Card from "@components/Card.svelte";
  import PrimaryButton from "@components/PrimaryButton.svelte";

  export let products: StampT[] = [];
</script>

<section>
  {#each products as {title, description, image, price}}
    <Card stamp={new Product(title, description, image, price)} />
  {/each}
</section>
<aside>
  <PrimaryButton shadow="0 0 10px rgba(0,0,0,0.5)" onClick={() => console.log($cart)}>
    {$cart.size} {$cart.size === 1 ? "producto" : "productos"} (total: ${$total})
  </PrimaryButton>
</aside>

<style>
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