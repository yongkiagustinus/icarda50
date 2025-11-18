document.addEventListener("DOMContentLoaded", function () {
  const navigationItems = document.querySelectorAll(
    ".timeline__navigation__item"
  );
  const timelineSections = document.querySelectorAll('[id^="timeline__"]');

  function initTimelineNavigation() {
    const lenis = window.lenis || null;

    navigationItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          if (lenis) {
            lenis.scrollTo(targetSection, {
              offset: 0,
              duration: 1.2,
            });
          } else {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      let maxIntersection = 0;
      let activeSection = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
          maxIntersection = entry.intersectionRatio;
          activeSection = entry.target;
        }
      });

      if (!activeSection && timelineSections.length > 0) {
        const scrollPosition = window.scrollY || window.pageYOffset;
        let minDistance = Infinity;

        timelineSections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          const distance = Math.abs(sectionTop - scrollPosition - 150);

          if (distance < minDistance) {
            minDistance = distance;
            activeSection = section;
          }
        });
      }

      if (activeSection) {
        const activeId = activeSection.getAttribute("id");
        navigationItems.forEach((item) => {
          const href = item.getAttribute("href");
          if (href === `#${activeId}`) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    timelineSections.forEach((section) => {
      observer.observe(section);
    });

    function updateActiveState() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      let activeSection = null;
      let minDistance = Infinity;

      timelineSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = sectionTop + rect.height;
        const viewportTop = scrollPosition + 150;

        if (sectionTop <= viewportTop && sectionBottom >= viewportTop) {
          const distance = Math.abs(sectionTop - viewportTop);
          if (distance < minDistance) {
            minDistance = distance;
            activeSection = section;
          }
        }
      });

      if (!activeSection) {
        timelineSections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          const viewportTop = scrollPosition + 150;

          if (sectionTop <= viewportTop) {
            const distance = viewportTop - sectionTop;
            if (distance < minDistance) {
              minDistance = distance;
              activeSection = section;
            }
          }
        });
      }

      if (activeSection) {
        const activeId = activeSection.getAttribute("id");
        navigationItems.forEach((item) => {
          const href = item.getAttribute("href");
          if (href === `#${activeId}`) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    }

    if (lenis) {
      lenis.on("scroll", updateActiveState);
    } else {
      window.addEventListener("scroll", updateActiveState, { passive: true });
    }

    setTimeout(updateActiveState, 100);
  }

  setTimeout(initTimelineNavigation, 200);
});
