<script>
import data from '$lib/data/site';
import EnvelopeIcon from '~icons/ph/envelope';
import GithubIcon from '~icons/ph/github-logo';
import TwitterIcon from '~icons/ph/twitter-logo';
import InstagramIcon from '~icons/ph/instagram-logo';
import TiktokIcon from '~icons/ph/tiktok-logo';
import YoutubeIcon from '~icons/ph/youtube-logo';
// import RSSIcon from '~icons/ph/rss';

const { github, twitter, instagram, tiktok, email, youtube } = data;
</script>

<footer>
  <div class="icons">
    <a
      href={youtube}
      target="_blank"
      rel="norel noreferrer"
      aria-label="youtube"
    >
      <YoutubeIcon height="24" width="24" />
    </a>
    <a href={github} target="_blank" rel="norel noreferrer" aria-label="github">
      <GithubIcon height="24" width="24" />
    </a>
    <a
      href={instagram}
      target="_blank"
      rel="norel noreferrer"
      aria-label="instagram"
    >
      <InstagramIcon height="24" width="24" />
    </a>
    <a
      href={twitter}
      target="_blank"
      rel="norel noreferrer"
      aria-label="twitter"
    >
      <TwitterIcon height="24" width="24" />
    </a>
    <a href={tiktok} target="_blank" rel="norel noreferrer" aria-label="tiktok">
      <TiktokIcon height="24" width="24" />
    </a>
    <a
      href="mailto:{email}"
      target="_blank"
      rel="norel noreferrer"
      aria-label="email"
    >
      <EnvelopeIcon height="24" width="24" />
    </a>
  </div>
  <p>
    Copyright &copy; {new Date().getFullYear()}
    <a class="hl" href={github}>IHTFY</a>
  </p>
</footer>

<style>
footer {
  position: relative;
  margin-top: 3rem;
  font-family: var(--font-heading);
  text-align: center;
  padding: 2rem 1rem;
  background-color: var(--color-main-bg);
  filter: opacity(0.5);
  transition: filter ease-out 0.2s;
  border-top: 1px var(--color-borders) solid;
}

footer:hover {
  filter: opacity(1);
}

p {
  line-height: 1.5em;
  color: var(--color-main-text);
}

a {
  text-decoration: none;
}

.hl {
  color: var(--color-shine);
}

.icons {
  margin: 0 auto 0.5rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: 220px;
}

.icons a {
  color: var(--color-shine);
  transition: color ease-out 0.2s;
}
.icons a:hover {
  color: var(--color-main-accent);
}
</style>
