document.addEventListener("DOMContentLoaded", function () {
  // Array of dummy captions related to ICARDA/agriculture
  const captions = [
    "Fifty years on, the mandate endures, 1997",
    "Research station in Tel Hadya, Syria, 1977",
    "Wheat field trials in Morocco, 1985",
    "Genebank preservation efforts, 1990",
    "Community training in Jordan, 2001",
    "Drought-resistant barley varieties, 2004",
    "Sustainable farming practices, 2008",
    "Women in agriculture program, 2010",
    "Climate adaptation research, 2011",
    "Innovation in dryland agriculture, 2015",
    "Next-generation genebank, 2017",
    "AI-driven breeding tools, 2018",
    "Global Strategy for Resilient Drylands, 2020",
    "Biosecurity initiatives, 2022",
    "African Plant Breeding Accelerator, 2023",
    "50th anniversary celebration, 2024",
    "Future of drylands research, 2025",
    "Field research in Ethiopia, 1989",
    "Seed conservation program, 1995",
    "Farmer cooperative meeting, 2001",
    "Irrigation system development, 2004",
    "Livestock research facility, 2008",
    "Youth agricultural training, 2010",
    "Soil conservation project, 2011",
    "Water management workshop, 2015",
    "Technology transfer session, 2017",
    "Partnership with CGIAR, 2018",
    "Resilience building program, 2020",
    "Innovation hub launch, 2022",
    "Research collaboration, 2023",
  ];

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const galleryItems = document.querySelectorAll("[data-gallery-item]");

  if (galleryItems.length > 0) {
    const shuffledCaptions = shuffleArray(captions);

    galleryItems.forEach((item, index) => {
      const img = item.querySelector("[data-gallery-img]");
      const caption = item.querySelector("[data-gallery-caption]");
      const link = item.querySelector("[data-gallery-link]");

      if (img) {
        let width, height;
        if (item.classList.contains("first__card")) {
          width = 800;
          height = 600;
        } else {
          width = 600;
          height = 600;
        }

        const randomSeed = Math.floor(Math.random() * 10000) + index * 1000;
        const imageUrl = `https://picsum.photos/seed/${randomSeed}/${width}/${height}`;

        img.src = imageUrl;
        img.alt = `Gallery Image ${index + 1}`;

        if (link) {
          link.href = imageUrl;
        }

        img.onerror = function () {
          const fallbackUrl = `https://via.placeholder.com/${width}x${height}?text=Gallery+${
            index + 1
          }`;
          this.src = fallbackUrl;
          if (link) {
            link.href = fallbackUrl;
          }
        };
      }

      if (caption) {
        caption.textContent =
          shuffledCaptions[index] || captions[index % captions.length];
      }

      const plusButton = item.querySelector(".gallery__card__btn");
      if (plusButton && link) {
        plusButton.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          link.click();
        });
      }
    });

    if (typeof refreshFsLightbox === "function") {
      setTimeout(() => {
        refreshFsLightbox();
      }, 100);
    }
  }
});
