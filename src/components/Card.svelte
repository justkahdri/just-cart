<script lang="ts">
  import { cart } from "@justkahdri/cart-store";
  import type Product from "@model/product";
  import PrimaryButton from "./PrimaryButton.svelte";

  export let stamp: Product;
  const { image, title, description, id } = stamp;

  const addThisProduct = () => {
    cart.addProduct(stamp.getPricing());
  };

  const removeThisProduct = () => {
    cart.removeProduct(stamp.getPricing());
  };
</script>

<article class="card">
  <img src={image} alt={description} />
  <div class="content">
    <p class="title">{title}</p>
    <p class="description">{description}</p>
  </div>
  <div class="buttons">
    {#if $cart.get(id)}
    <PrimaryButton onClick={addThisProduct}>+</PrimaryButton>
    <PrimaryButton onClick={removeThisProduct}>-</PrimaryButton>
    {:else}
    <PrimaryButton onClick={addThisProduct}>Agregar</PrimaryButton>
    {/if}
  </div>
</article>

<style>
  img {
    width: 100%;
    object-fit: contain;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .card > div {
    display: flex;
    gap: 6px;
  }

  .card > .content {
    flex-direction: column;
    height: 100%;
  }

  .title {
    font-weight: 500;
    font-size: 20px;
  }

  .description {
    color: gray;
  }
</style>