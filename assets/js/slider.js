document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    autoHeight: true,
    speed: 2000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const pageCurrent = document.querySelector(".swiper-page-current");
  const pageTotal = document.querySelector(".swiper-page-total");
  const progressBars = document.querySelectorAll(".swiper-progress-bar");

  if (pageTotal) {
    pageTotal.textContent = swiper.slides.length;
  }

  swiper.on("slideChange", function () {
    const currentIndex = swiper.activeIndex + 1;

    if (pageCurrent) {
      pageCurrent.textContent = currentIndex;
    }

    progressBars.forEach((bar, index) => {
      const slideNumber = index + 1;

      bar.classList.remove(
        "swiper-progress-bar--active",
        "swiper-progress-bar--completed"
      );

      if (slideNumber < currentIndex) {
        bar.classList.add("swiper-progress-bar--completed");
      } else if (slideNumber === currentIndex) {
        bar.classList.add("swiper-progress-bar--active");
      }
    });
  });

  swiper.emit("slideChange");
});
