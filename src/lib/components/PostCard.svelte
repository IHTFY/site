<script lang="ts">
import { fade } from 'svelte/transition';
import CalendarIcon from '~icons/ph/calendar-blank-bold';

export let title: string;
export let desc: string;
export let href: string;
export let date: string;
export let tags: Array<string>;
</script>

<div class="card" in:fade={{ duration: 200 }}>
  <a rel="prefetch" {href}>
    <img
      class="card__img"
      src={`/assets/post/${title
        .toLocaleLowerCase()
        .replace(/ /g, '-')}/cover.jpg`}
      alt={title}
      loading="lazy"
      data-testid="img"
    />
    <div class="card__details">
      <span class="card__title" data-testid="title">{title}</span>
      <div class="card__date">
        <CalendarIcon className="date__icon" />
        <span class="date__label" data-testid="date">
          {new Date(date + 'T00:00').toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </span>
      </div>
      <p class="card__desc" data-testid="desc">{@html desc}</p>
      <div class="card__tags">
        {#each tags as tag}
          <span class="card__tag" data-testid="tag">{tag}</span>
        {/each}
      </div>
    </div>
  </a>
</div>

<style>
.card {
  overflow: hidden;
  text-align: left;
  background-color: var(--color-alt-bg);
  z-index: 2;
  border-radius: 0.25rem;
  box-shadow: var(--card-shadow);
  transition-duration: 500ms;
}

a {
  color: var(--color-main-text);
  text-decoration: none;
}

.card__details {
  padding: 1rem;
  display: grid;
  grid-template-rows: 3.5rem 2rem 5.5rem 1fr;
  z-index: 2;
}

.card__img {
  position: relative;
  display: block;
  width: 100%;
  height: 12rem;
  object-fit: cover;
  background-color: var(--color-borders);
}

.card__title {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5em;
  text-transform: capitalize;
  color: var(--color-main-text);
  transition: color ease-out 0.1s;
}

.card__desc {
  font-family: var(--font-sans);
  line-height: 1.5em;
  color: var(--color-alt-text);
  margin-top: 0.25rem;
  padding-top: 0.5rem;
}

.card__date {
  font-family: var(--font-heading);
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-self: start;
  font-size: 0.8rem;
  color: var(--color-alt-text);
}

.card__date :global(.date__icon) {
  width: 1rem;
  height: 1rem;
  display: block;
  margin-top: -0.25rem;
}

.card__tags {
  display: flex;
  gap: 0.5rem;
}

.card__tag {
  background-color: var(--color-special-bg);
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-main-text);
  font-size: 0.8rem;
  text-decoration: none;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  transition: filter ease-out 0.2s;
  /* text-transform: capitalize; */
}

.card__tag::before {
  content: '# ';
  font-weight: 600;
}

@media only screen and (min-width: 480px) {
  .card:hover {
    transform: scale(1.01);
    transition-duration: 100ms;
  }

  .card:hover .card__title {
    color: var(--color-shine);
  }

  .card:hover .card__img {
    animation: color-shift infinite 2s linear;
  }
}
</style>
