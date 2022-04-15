<script>
import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>Estampitiency</title>
  <meta name="description" content="E-commerce de estampitas. Hecho con SvelteKit 💖. Artwork by @emalozada25"/>
</svelte:head>

<header>Estampitiency</header>

<main>
  <slot />
</main>

<Footer />

<style>
  /* Layout */
  :global(html, body) {
    margin: 0;
    height: 100%;
    background-color: whitesmoke;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(code) {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  :global(#root) {
    max-width: 1250px;
    min-height: 100vh;
    margin: auto;
    background-color: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Blocks */
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  header {
    padding: 16px;
    border-bottom: 1px solid gainsboro;
    font-weight: bold;
    font-size: 24px;
  }
</style>