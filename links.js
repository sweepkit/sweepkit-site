// Fill in once the store listing and checkout exist (ops loop edits this file).
const LINKS = {
  store: 'https://chromewebstore.google.com/detail/REPLACE_ME_EXTENSION_ID',
  checkout: 'https://buy.polar.sh/polar_cl_88n6qHctzyni2Ypsokqe8vMAWe5s5znjBgDYs1iQSmX',
  support: 'sweepkit.tools@gmail.com',
};
for (const [id, key] of [['install', 'store'], ['buy', 'checkout']]) {
  const a = document.getElementById(id);
  if (a) a.href = LINKS[key];
}
for (const a of document.querySelectorAll('a[data-mail]')) { a.href = 'mailto:' + LINKS.support; a.textContent = LINKS.support; }
