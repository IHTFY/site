<script lang="ts">
import { fade } from 'svelte/transition';
import UpIcon from '~icons/ph/caret-up-bold';

let currentPosition: number;

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<svelte:window bind:scrollY={currentPosition} />

{#if currentPosition > 50}
  <div
    class="button"
    on:click={scrollToTop}
    transition:fade={{ duration: 100 }}
  >
    <UpIcon className="button__icon" />
  </div>
{/if}

<style>
.button {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--color-main-accent);
  color: var(--color-light-alt-bg);
  border-radius: 0.25rem;
  box-shadow: var(--card-shadow);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.button:hover {
  filter: var(--filter-brightness);
}

:global(.button__icon) {
  color: var(--color-main-text);
}
</style>
