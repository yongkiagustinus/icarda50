document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
