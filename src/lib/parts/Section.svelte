<script lang="ts">
import Pattern from '$lib/icons/Pattern.svelte';
import PostCard from '$lib/components/PostCard.svelte';
import ProjectCard from '$lib/components/ProjectCard.svelte';

export let title: string;
export let data: Array<Record<string, any>>;
export let btnText: string;
export let url: string;
export let type: 'posts' | 'projects';
</script>

<section class="section">
  <Pattern className="section__pattern" />
  <h1 class="section__title">{title}</h1>
  <div class="section__cards">
    {#if type === 'posts'}
      {#each data as item}
        <PostCard
          title={item.title}
          href={`/post/${item.slug}`}
          desc={item.desc}
          date={item.date}
          tags={item.tags}
        />
      {/each}
    {:else}
      {#each data as item}
        <ProjectCard
          title={item.title}
          imgSrc={`/assets/project/${item.slug}/cover.webp`}
          href={`/project/${item.slug}`}
          desc={item.desc}
          demo={item.demo}
          source={item.source}
        />
      {/each}
    {/if}
  </div>
  <a href={url} class="section__button">{btnText}</a>
</section>

<style>
.section {
  position: relative;
  margin-top: 4rem;
  font-family: var(--font-sans);
  color: var(--color-shine);
  text-align: center;
  z-index: 2;
}

.section__title {
  font-family: var(--font-heading);
  position: relative;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.section__title::before {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  height: 0.25rem;
  left: 2rem;
  right: 2rem;
  border-radius: 0.25rem;
  background-color: var(--color-main-accent);
}

.section__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1.25rem;
}

.section__button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1.25rem;
  color: var(--color-light-alt-bg);
  background-color: var(--color-main-accent);
  border-radius: 0.25rem;
  box-shadow: var(--card-shadow);
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 1.125rem;
  letter-spacing: 0.02em;
}

:global(.section__pattern) {
  color: var(--color-main-accent);
  position: absolute;
  top: 0;
  left: -2rem;
  width: 14rem;
  height: 10rem;
}

.section__button:hover {
  animation: color-shift 2s linear infinite;
}

@media only screen and (max-width: 480px) {
  .section::after {
    right: 0;
  }
}
</style>
