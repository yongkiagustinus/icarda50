(function () {
  function isMobileDevice() {
    return window.innerWidth <= 767;
  }

  function initTextReveal() {
    if (isMobileDevice()) {
      return;
    }

    if (typeof gsap === "undefined" || typeof SplitType === "undefined") {
      console.warn("GSAP or SplitType not loaded");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const textElements = document.querySelectorAll(
      ".heading-1, .heading-2, .timeline__year, .body-text, .timeline__content, .way__forward__content, .quick__links__item"
    );

    setTimeout(() => {
      const elementsArray = Array.from(textElements).sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const posA = rectA.top + scrollTop;
        const posB = rectB.top + scrollTop;
        return posA - posB;
      });

      let lastAnimatedIndex = -1;

      elementsArray.forEach((element, index) => {
        try {
          if (element.dataset.animated === "true") {
            return;
          }

          const split = new SplitType(element, {
            types: "lines",
            lineClass: "split-line",
          });

          if (!split.lines || split.lines.length === 0) {
            return;
          }

          element.dataset.animated = "true";

          gsap.set(split.lines, {
            y: 100,
            opacity: 0,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            end: "bottom 20%",
            onEnter: () => {
              const shouldAnimate =
                index === 0 || lastAnimatedIndex >= index - 1;

              if (shouldAnimate) {
                lastAnimatedIndex = Math.max(lastAnimatedIndex, index);

                gsap.to(split.lines, {
                  y: 0,
                  opacity: 1,
                  duration: 0.7,
                  ease: "Power2.easeOut",
                  stagger: 0.1,
                });
              } else {
                const checkInterval = setInterval(() => {
                  if (lastAnimatedIndex >= index - 1) {
                    clearInterval(checkInterval);
                    lastAnimatedIndex = Math.max(lastAnimatedIndex, index);

                    gsap.to(split.lines, {
                      y: 0,
                      opacity: 1,
                      duration: 0.7,
                      ease: "Power2.easeOut",
                      stagger: 0.1,
                    });
                  }
                }, 100);
              }
            },
          });
        } catch (error) {
          console.warn("Error animating text element:", error);
        }
      });
    }, 150);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTextReveal);
  } else {
    initTextReveal();
  }

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (!isMobileDevice() && typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 250);
  });
})();
