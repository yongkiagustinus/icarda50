document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    smoothTouch: false,
  });

  window.lenis = lenis;

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  const scrollToTop = document.querySelector(".back__to__top");
  const scrollToTopButton = scrollToTop?.querySelector(".btn__top");

  if (scrollToTop && typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(scrollToTop, {
      opacity: 0,
      y: 100,
      pointerEvents: "none",
    });

    let isVisible = false;

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const shouldShow = self.progress >= 0.8;

        if (shouldShow && !isVisible) {
          isVisible = true;
          gsap.to(scrollToTop, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            pointerEvents: "auto",
          });
        } else if (!shouldShow && isVisible) {
          isVisible = false;
          gsap.to(scrollToTop, {
            opacity: 0,
            y: 100,
            duration: 0.7,
            pointerEvents: "none",
          });
        }
      },
    });
  }

  if (scrollToTopButton && window.lenis) {
    scrollToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    });
  }

  requestAnimationFrame(raf);
});
