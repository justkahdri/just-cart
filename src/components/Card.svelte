<script lang="ts">
import PrimaryButton from "./PrimaryButton.svelte";


  export let image: string;
  export let title: string;
  export let description: string;
</script>

<article class="card">
  <img src={image} alt={description} />
  <div>
    <p class="title">{title}</p>
    <p class="description">{description}</p>
  </div>
  <PrimaryButton>Agregar</PrimaryButton>
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
    flex-direction: column;
    gap: 6px;
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