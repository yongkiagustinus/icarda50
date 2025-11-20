document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[data-popup]");
  const popups = document.querySelectorAll(".popup[data-popup-id]");
  const body = document.body;
  const html = document.documentElement;

  function disableBodyScroll() {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;
    html.style.overflow = "hidden";
  }

  function enableBodyScroll() {
    body.style.overflow = "";
    body.style.paddingRight = "";
    html.style.overflow = "";
  }

  function openPopup(popupId, scrollToYear = null) {
    const popup = document.querySelector(`.popup[data-popup-id="${popupId}"]`);
    if (popup) {
      popups.forEach((p) => {
        if (p !== popup && p.style.display === "flex") {
          closePopup(p);
        }
      });

      const popupContent = popup.querySelector(".popup__content");

      popup.style.display = "flex";

      popup.setAttribute("data-lenis-prevent", "");

      disableBodyScroll();

      setTimeout(() => {
        popup.classList.add("active");
        if (popupContent) {
          popupContent.classList.add("active");
        }

        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }

        const popupBody = popup.querySelector(".popup__content__body");
        if (popupBody) {
          if (scrollToYear) {
            let targetElement = null;

            // Check if it's an office section (starts with "office-")
            if (scrollToYear.startsWith("office-")) {
              const officeTitles = popupBody.querySelectorAll(
                ".popup__content__body__office__title"
              );
              // Extract the decade from "office-1970s" -> "70s" or "office-2000s" -> "2000s"
              let decade = scrollToYear.replace("office-", "");
              if (decade.startsWith("19")) {
                decade = decade.replace("19", "");
              } else if (decade.startsWith("20")) {
                // Keep "2000s" as is
              }
              const searchText = decade; // e.g., "70s" or "2000s"

              officeTitles.forEach((titleEl) => {
                const titleText = titleEl.textContent.toLowerCase();
                // Match "in the 70s" or "70s" or "in the 2000s" or "2000s"
                if (
                  titleText.includes(searchText.toLowerCase()) ||
                  titleText.includes(`in the ${searchText.toLowerCase()}`)
                ) {
                  targetElement = titleEl;
                }
              });
            } else {
              // Regular year element search
              const yearElements = popupBody.querySelectorAll(
                ".popup__content__body__item__image__year"
              );

              yearElements.forEach((yearEl) => {
                if (yearEl.textContent.trim() === scrollToYear) {
                  targetElement = yearEl.closest(".popup__content__body__item");
                }
              });
            }

            if (targetElement) {
              setTimeout(() => {
                const offset = 150;
                const elementPosition = targetElement.offsetTop;
                popupBody.scrollTop = elementPosition - offset;
              }, 50);
            } else {
              popupBody.scrollTop = 0;
            }
          } else {
            popupBody.scrollTop = 0;
          }
        }
      }, 10);
    }
  }

  function closePopup(popup) {
    if (popup) {
      const popupContent = popup.querySelector(".popup__content");

      popup.classList.remove("active");
      if (popupContent) {
        popupContent.classList.remove("active");
      }

      setTimeout(() => {
        popup.style.display = "none";
        popup.removeAttribute("data-lenis-prevent");
        enableBodyScroll();
      }, 400);
    }
  }

  function closeAllPopups() {
    popups.forEach((popup) => {
      closePopup(popup);
    });
  }

  popupTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const popupId = this.getAttribute("data-popup");
      const scrollToYear = this.getAttribute("data-scroll-to");
      if (popupId) {
        openPopup(popupId, scrollToYear);
      }
    });
  });

  const timelineCards = document.querySelectorAll(
    ".timeline__card[data-popup]"
  );
  timelineCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".timeline__card__link")) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const popupId = this.getAttribute("data-popup");
      const scrollToYear = this.getAttribute("data-scroll-to");
      if (popupId) {
        openPopup(popupId, scrollToYear);
      }
    });
  });

  popups.forEach((popup) => {
    const closeButton = popup.querySelector(".popup__content__close");
    if (closeButton) {
      closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        closePopup(popup);
      });
    }

    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        e.preventDefault();
        e.stopPropagation();
        closePopup(popup);
      }
    });

    const popupContent = popup.querySelector(".popup__content");
    if (popupContent) {
      popupContent.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  });
});
