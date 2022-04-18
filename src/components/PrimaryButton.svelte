<script lang="ts">
  export let shadow = "none";
  export let onClick: MouseEventHandler;
</script>

<button class="btn" style:box-shadow={shadow} on:click={onClick}>
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
    flex: 1;
  }
</style>