<script lang="ts">
  export let shadow: string = "none";
</script>

<button class="btn" style:box-shadow={shadow}>
  <slot />
</button>

<style>
  .btn {
    color: white;
    background-color: dodgerblue;
    border: none;
    line-height: 48px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    padding: 0 16px;
  }
</style>