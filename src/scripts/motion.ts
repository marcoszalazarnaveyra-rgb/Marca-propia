// CSS owns every animation. The observer only starts each entrance once.
// Content stays visible if JavaScript or IntersectionObserver is unavailable.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const entrances = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.setAttribute('data-entered', 'true');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12 });

  document.querySelectorAll('.hero-art, [data-reveal]').forEach(element => entrances.observe(element));
}
