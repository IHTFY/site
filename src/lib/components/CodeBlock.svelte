<script>
export let filename;
export let lang;
</script>

<div class="code-block">
  {#if filename}
    <div class="filename">{filename}</div>
  {/if}
  {#if lang}
    <div class="lang">{lang}</div>
  {/if}
  <slot />
</div>

<style>
.code-block {
  display: block;
  position: relative;
  background-color: var(--color-alt-bg);
  color: var(--color-main-text);
  font-family: var(--font-monospace);
  font-size: 1rem;
  line-height: 1.33em;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 30px 15px;
  margin: 30px 0;
}
.code-block :global(pre) {
  overflow-x: auto;
  scrollbar-color: var(--color-main-accent) var(--color-main-bg);
  scrollbar-width: thin;
  padding: 0;
  margin: 0;
  border: none;
}
.code-block :global(pre)::-webkit-scrollbar {
  height: 8px;
}
.code-block :global(pre)::-webkit-scrollbar-thumb {
  background: var(--color-main-accent);
}
.code-block :global(pre)::-webkit-scrollbar-thumb:hover {
  background: var(--color-main-main-bg);
}
.code-block .lang {
  position: absolute;
  right: 0;
  top: -15px;
  background: inherit;
  border-radius: 8px;
  padding: 5px 10px;
  z-index: 2;
  font-size: 0.85em;
}
.code-block .filename {
  background: inherit;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: -2px;
  padding: 5px 10px;
  position: absolute;
  left: 0px;
  top: -15px;
  z-index: 1;
}
</style>
