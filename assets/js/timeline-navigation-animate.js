(function () {
  function isMobileDevice() {
    return window.innerWidth <= 767;
  }

  function initTimelineNavigationAnimate() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.warn("GSAP or ScrollTrigger not loaded");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    if (window.lenis) {
      window.lenis.on("scroll", ScrollTrigger.update);
    }

    setTimeout(() => {
      const timelineNavigation = document.querySelector(
        ".timeline__navigation"
      );
      const timelineSection1 = document.querySelector("#timeline__1");
      const timelineSection6 = document.querySelector("#timeline__7");

      if (!timelineNavigation || !timelineSection1) {
        return;
      }

      if (isMobileDevice()) {
        gsap.set(timelineNavigation, {
          y: 100,
          opacity: 0,
        });
      } else {
        gsap.set(timelineNavigation, {
          x: -200,
          opacity: 0,
        });
      }

      ScrollTrigger.create({
        trigger: timelineSection1,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          if (isMobileDevice()) {
            const currentY = gsap.getProperty(timelineNavigation, "y");
            if (currentY !== 0) {
              gsap.to(timelineNavigation, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "Power3.easeOut",
              });
            }
          } else {
            const currentX = gsap.getProperty(timelineNavigation, "x");
            if (currentX !== 0) {
              gsap.to(timelineNavigation, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "Power3.easeOut",
              });
            }
          }
        },
        onLeaveBack: () => {
          if (isMobileDevice()) {
            gsap.to(timelineNavigation, {
              y: 100,
              opacity: 0,
              duration: 1.2,
              ease: "Power3.easeOut",
            });
          } else {
            gsap.to(timelineNavigation, {
              x: -200,
              opacity: 0,
              duration: 1.2,
              ease: "Power3.easeOut",
            });
          }
        },
      });

      if (timelineSection6) {
        ScrollTrigger.create({
          trigger: timelineSection6,
          start: "bottom bottom",
          end: "bottom top",
          onEnter: () => {
            if (isMobileDevice()) {
              gsap.to(timelineNavigation, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "Power3.easeOut",
              });
            } else {
              gsap.to(timelineNavigation, {
                x: -200,
                opacity: 0,
                duration: 1.2,
                ease: "Power3.easeOut",
              });
            }
          },
          onLeaveBack: () => {
            if (isMobileDevice()) {
              const currentY = gsap.getProperty(timelineNavigation, "y");
              if (currentY !== 0) {
                gsap.to(timelineNavigation, {
                  y: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "Power3.easeOut",
                });
              }
            } else {
              const currentX = gsap.getProperty(timelineNavigation, "x");
              if (currentX !== 0) {
                gsap.to(timelineNavigation, {
                  x: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "Power3.easeOut",
                });
              }
            }
          },
        });
      }

      ScrollTrigger.refresh();
    }, 300);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initTimelineNavigationAnimate
    );
  } else {
    initTimelineNavigationAnimate();
  }

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 250);
  });
})();
