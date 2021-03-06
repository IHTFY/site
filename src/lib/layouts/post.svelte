<script>
import { onMount } from 'svelte';
import { page } from '$app/stores';
import SEO from '$lib/components/SEO.svelte';
import Progress from '$lib/components/Progress.svelte';

import '../../prism-night-owl.css';

export let title = '';
export let date = Date.now();
export let desc = '';
export let tags = [];

const currentSlug = $page.url.pathname;

let content;
onMount(() => {
  content.querySelectorAll('h1 a, h2 a, h3 a').forEach(
    (
      /** @type {any} */
      a
    ) => {
      // use `decodeURIComponent` to handle Japanese characters
      if (
        !a.hash ||
        !content.querySelectorAll(decodeURIComponent(a.hash)).length
      ) {
        return;
      }

      a.addEventListener('click', (/** @type {any} */ e) => {
        e.preventDefault();
        window.location.hash = e.target.getAttribute('href');
      });
    }
  );
});
</script>

<SEO {desc} {title} />

<section class="post">
  <h1 class="post__title">{title}</h1>
  <span class="post__date">
    Posted on
    {new Date(date + 'T00:00').toLocaleDateString('en-US', {
      weekday: 'long',
    })},
    {new Date(date + 'T00:00').toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}
  </span>
  <a
    class="post__edit"
    href="mailto:siteEdit@ihtfy.com?subject=Edit%20{currentSlug}"
    target="_blank"
    rel="norel noreferrer">Suggest An Edit</a
  >
  <div class="post__tags">
    {#each tags as tag}
      <div class="post__tag">{tag}</div>
    {/each}
  </div>
  <main class="post__content" bind:this={content}>
    <slot />
  </main>
</section>
<Progress />

<style>
.post {
  max-width: 1080px;
  padding: 1rem 2rem;
  margin: 0 auto;
  color: var(--color-main-text);
  text-align: center;
}

.post__title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  text-transform: uppercase;
  max-width: 30ch;
  margin: 3rem auto 0;
  color: var(--color-shine);
  font-weight: 600;
}

.post__date {
  font-family: var(--font-heading);
  display: block;
  text-align: center;
  font-size: 1.125rem;
  line-height: 2em;
  color: var(--color-alt-text);
}

.post__edit {
  position: relative;
  display: block;
  font-family: var(--font-heading);
  text-align: center;
  font-size: 1.125rem;
  line-height: 2em;
  color: var(--color-main-accent);
  text-decoration: none;
  margin-bottom: 1rem;
}

.post__edit:hover {
  text-decoration: underline;
}

.post__edit:hover::before {
  transform: scale3d(1, 1, 1);
}

.post__tags {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.post__tag {
  padding: 0.25rem 0.5rem;
  background-color: var(--color-special-bg);
  color: var(--color-shine);
  border-radius: 0.25rem;
  font-family: var(--font-heading);
  font-weight: 500;
}

.post__tag::before {
  content: '# ';
}

.post__content {
  font-family: var(--font-sans);
  max-width: 70ch;
  margin: 0 auto;
  font-size: 1rem;
  text-align: left;
}

.post__content :global(p) {
  line-height: 1.75em;
  font-size: 1rem;
  margin: 0 0 1.25rem;
}

.post__content :global(h1),
.post__content :global(h2),
.post__content :global(h3) {
  position: relative;
  font-family: var(--font-heading);
  margin: 2.5rem 0 0.5rem;
}

.post__content :global(h1 + h2) {
  margin: 1.5rem 0 0.5rem;
}

.post__content :global(h1) {
  font-size: 1.5rem;
  line-height: 1.5em;
  letter-spacing: 0.05em;
}

.post__content :global(h1::after) {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.125rem;
  background-image: linear-gradient(
    to right,
    var(--color-main-accent),
    rgba(0, 0, 0, 0)
  );
}

.post__content :global(h2) {
  line-height: 1.5em;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
}

.post__content :global(h3) {
  font-size: 1.125rem;
  line-height: 2em;
  padding-left: 1.5rem;
  letter-spacing: 0.05em;
}

.post__content :global(h3::after) {
  content: '• ';
  position: absolute;
  left: 0;
  color: var(--color-main-accent);
}

.post__content :global(img) {
  width: 100%;
}

.post__content :global(pre) {
  padding: 1rem;
  scrollbar-color: var(--color-thin) var(--color-special-bg);
  border: 0.0625rem var(--color-borders) solid;
  margin: 1.25rem 0;
  overflow-x: auto;
  background-color: var(--color-alt-bg);
}

.post__content :global(pre::-webkit-scrollbar) {
  background-color: var(--color-alt-bg);
  height: 0.5rem;
}

.post__content :global(pre:hover::-webkit-scrollbar) {
  background-color: var(--color-special-bg);
  cursor: pointer;
}

.post__content :global(pre::-webkit-scrollbar-thumb) {
  background-color: var(--color-alt-bg);
  cursor: pointer;
}

.post__content :global(pre:hover::-webkit-scrollbar-thumb) {
  background-color: var(--color-thin);
}

.post__content :global(p > a),
.post__content :global(ul a) {
  position: relative;
  display: inline-block;
  color: var(--color-shine);
  text-decoration: none;
  z-index: 1;
}

.post__content :global(p > a::after),
.post__content :global(ul a::after) {
  content: '';
  position: absolute;
  background-color: var(--color-main-accent);
  bottom: 0.25rem;
  left: 0;
  right: 0;
  transform: scale3d(0, 0, 0);
  height: 2px;
  z-index: -1;
}

.post__content :global(p > a:hover::after),
.post__content :global(ul a:hover::after) {
  transform: scale3d(1, 1, 1);
  transition: transform ease-out 0.2s;
}

.post__content :global(a:hover) {
  text-decoration-color: var(--color-main-accent);
}

.post__content :global(code) {
  font-family: var(--font-monospace);
  padding: 0.125rem 0.25rem;
  border: 0.0625rem var(--color-borders) solid;
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: var(--color-alt-bg);
}

.post__content :global(pre code) {
  font-family: var(--font-monospace);
  font-weight: 400;
  font-size: 0.9rem;
  padding: 0;
  border: none;
  border-radius: 0;
  background: none;
  box-shadow: none;
}

.post__content :global(ul) {
  list-style-position: inside;
  margin: 0 0 1.25rem;
}

.post__content :global(:not(li) ul) {
  margin: 0;
}

.post__content :global(#table-of-contents + ul) {
  margin: 0 0 1.5rem;
}

.post__content :global(#table-of-contents + ul li p) {
  font-weight: 400;
  display: inline;
}

.post__content :global(ul li) {
  position: relative;
  font-size: 1rem;
  line-height: 2em;
  padding-left: 1rem;
  /* white-space: pre-wrap; */
  word-wrap: break-word;
}

.post__content :global(li p:first-child) {
  display: inline-block;
  color: var(--color-shine);
}

.post__content :global(li p:not(:first-child)) {
  font-family: var(--font-sans);
  color: var(--color-main-text);
  font-size: 1.05rem;
  line-height: 1.75em;
  padding-left: 1.5rem;
}

.post__content :global(ul li > ul *) {
  font-size: 1rem;
}

.post__content :global(table) {
  width: 100%;
  border-radius: 0.2rem;
  overflow: hidden;
}

.post__content :global(table a) {
  transition: all ease-out 0.2s;
  font-weight: 600;
  line-height: 1.25em;
  font-style: italic;
  color: var(--color-shine);
}

.post__content :global(table tr:nth-child(odd)) {
  background-color: var(--color-special-bg);
}

.post__content :global(table th) {
  background-color: var(--color-main-accent);
  color: var(--color-alt-bg);
  font-size: 1.25rem;
}

.post__content :global(table th),
.post__content :global(table td) {
  padding: 0.75rem 1rem;
}

.post__content :global(blockquote) {
  border-left: 0.25rem var(--color-thin) solid;
  padding-left: 0.5rem;
}

.post__content :global(blockquote p) {
  font-size: 1rem;
  letter-spacing: 0.02em;
  color: var(--color-alt-text);
  margin: 1rem 0;
}

.post__content :global(h1 a),
.post__content :global(h2 a),
.post__content :global(h3 a) {
  color: var(--color-shine);
  text-decoration: none;
}

.post__content :global(del),
.post__content :global(del *) {
  color: var(--color-alt-text) !important;
  font-style: italic;
  text-decoration: line-through;
}

.post__content :global(h1 a::before),
.post__content :global(h2 a::before),
.post__content :global(h3 a::before) {
  display: none;
}

@media only screen and (max-width: 480px) {
  :global(.post__content pre) {
    margin-left: -1rem !important;
    margin-right: -1rem !important;
    border: none;
    border-radius: 0;
  }

  :global(.post__content ul *) {
    font-size: 0.95rem !important;
  }

  :global(.post__content p) {
    font-size: 1rem;
  }

  .post__content :global(pre::-webkit-scrollbar) {
    height: 0;
  }
}
</style>
