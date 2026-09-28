const filters = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const cards = document.querySelectorAll<HTMLElement>('[data-project]');
const projectGrid = document.querySelector<HTMLElement>('#project-grid');
const identityCollection = document.querySelector<HTMLElement>('#identity-collection');
const identityCards = document.querySelectorAll<HTMLElement>('[data-identity]');
const description = document.querySelector<HTMLElement>('#service-description');
const count = document.querySelector<HTMLElement>('#project-count');
const index = document.querySelector<HTMLElement>('#work-index');

function showPortfolio(filter: string) {
  const showIdentities = filter === 'diseno';
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
  if (projectGrid) projectGrid.hidden = showIdentities;
  if (identityCollection) identityCollection.hidden = !showIdentities;

  let visible = 0;
  cards.forEach(card => {
    card.hidden = filter !== 'all' && !card.dataset.categories?.split(' ').includes(filter);
    if (!card.hidden) visible++;
  });
  if (showIdentities) visible = identityCards.length;
  if (description) description.hidden = filter === 'all';
  document.querySelectorAll<HTMLElement>('[data-service]').forEach(panel => panel.hidden = panel.dataset.service !== filter);
  const total = String(visible).padStart(2, '0');
  if (count) count.textContent = `${total} ${showIdentities ? 'identidades visuales' : `proyectos ${filter === 'all' ? 'destacados' : `de ${filter}`}`}`;
  if (index) index.textContent = `/ 01 — ${total}`;
}

filters.forEach(button => button.addEventListener('click', () => showPortfolio(button.dataset.filter ?? 'all')));
showPortfolio('all');
