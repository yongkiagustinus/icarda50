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

  function openPopup(popupId) {
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
          popupBody.scrollTop = 0;
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
      if (popupId) {
        openPopup(popupId);
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
