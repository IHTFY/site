<script lang="ts">
export let date: string = '';

const dateObj = new Date(date + 'T00:00');

const formattedDate = dateObj.toLocaleDateString('en-US', {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
</script>

<section class="update">
  <div class="update__header">
    <span class="update__title">UPDATE</span>
    <span class="update__date">{formattedDate}</span>
  </div>
  <div class="update__content">
    <slot />
  </div>
</section>

<style>
.update {
  background-color: var(--color-alt-bg);
  border: 0.0625rem var(--color-borders) solid;
  border-left: 0.125rem var(--color-main-accent) solid;
}

.update__header {
  padding: 0.5rem 1rem;
  background-color: var(--color-main-bg);
  color: var(--color-main-text);
  font-family: var(--font-heading);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.update__title {
  font-weight: 600;
}

.update__date {
  color: var(--color-alt-text);
}

.update__content {
  padding: 1rem;
  color: var(--color-main-text);
  background-color: var(--color-alt-bg);
  font-size: 1.125rem;
  line-height: 1.75em;
}
</style>
