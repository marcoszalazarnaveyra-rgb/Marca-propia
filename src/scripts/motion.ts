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

// On narrow screens, the folders respond to scroll direction rather than hover.
// A small movement threshold avoids toggling during touch-scroll jitter.
const mobileLayout = window.matchMedia('(max-width: 639px)');
const heroArt = document.querySelector<HTMLElement>('.hero-art');

if (heroArt) {
  let directionAnchor = window.scrollY;
  let scheduledFrame = 0;

  const updateFan = () => {
    scheduledFrame = 0;
    const scrollPosition = Math.max(0, window.scrollY);

    if (!mobileLayout.matches || motionPreference.matches) {
      heroArt.removeAttribute('data-fan');
      directionAnchor = scrollPosition;
      return;
    }

    if (scrollPosition < 12) {
      heroArt.dataset.fan = 'closed';
      directionAnchor = scrollPosition;
      return;
    }

    if (Math.abs(scrollPosition - directionAnchor) >= 10) {
      heroArt.dataset.fan = scrollPosition > directionAnchor ? 'open' : 'closed';
      directionAnchor = scrollPosition;
    }
  };

  const scheduleFan = () => {
    if (!scheduledFrame) scheduledFrame = window.requestAnimationFrame(updateFan);
  };

  window.addEventListener('scroll', scheduleFan, { passive: true });
  mobileLayout.addEventListener('change', updateFan);
  motionPreference.addEventListener('change', updateFan);
  updateFan();
}
