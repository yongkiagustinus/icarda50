document.addEventListener("DOMContentLoaded", function () {
  const captions = [
    "First ICARDA Board of Trustees lunch at Tel Hadya Farm in 1978.",
    "A bountiful harvest of chickpeas for farmers in Morocco. 2014.",
    "A view of ICARDA's facilities in Tal Hadya, Syria, 2007. Photo by Cary Fowler/Crop Trust.",
    "Mr. Aly Abousabaa, ICARDA Director General, and H.E. Dr. Mohamed Sadiki, former Minister of Agriculture of Morocco, cut the ribbon to inaugurate ICARDA's genebank in Rabat, 2022. Photo by James Pursey/ICARDA.",
    "An Angora goat farmer with his family in northern Tajikistan, photographed in April 2007 as part of the ICARDA‑IFAD value chain project.",
    "Dr. Mahmoud Solh, former ICARDA Director General, welcomes Honorable Pratibha Patil, former President of India At ICARDA's Tel Hadya office in 2010.",
    "Dr. Norman E. Borlaug, Nobel Peace Prize Laureate and father of the Green Revolution; Mr. Ahmed Mousa Al-Ali, Director of Aleppo Agriculture Directorate; Dr. Robert Havener, former Chair of ICARDA's Board of Trustees; Dr. Jitendra P. Srivastava, international plant breeding researcher and former head of ICARDA's cereals program; and Mr. Fayek Bah'hadi, senior staff member at the Aleppo Agriculture Directorate.At the location of the ICARDA research station near Tel Hadya, Syria, selected in 1975.",
    "Community-based goat breeding field day in the Gumara-Maksegnit watershed, Ethiopia in 2014.",
    "Drip Irrigation system for date palm trees in Oman. 2003. Photo by Ahmed El Sheemy/ICARDA.",
    "Dr. Barbara Ann Rischkowsky showcases ICARDA's forager at Marchouch Station, Morocco. 2025. Photo by Ismail Belkhadir/ICARDA.",
    "Dr. Athanasios Tsivelikas inside ICARDA-Rabat Genebank, Morocco. 2022. Photo by Michael Major/Crop Trust.",
    "Dr. Abdoul Aziz Niane in a catus field in a demosite in UAE. 2023. Photo by Ahmed El Sheemy/ICARDA.",
    "Dr. Ismahane Elouafi, CGIAR Executive Managing Director visits ICARDA Cairo Office in December 2023. Photo by James Pursey/ICARDA.",
    "Dr. Alaa Hamwieh in a crop breeding lab in Giza, Egypt, 2020. Photo by Roni Ziade/ICARDA.",
    "Dr. Filippo Bassi in a durum wheat field, BOLD Project 2025. Photo by Ahmed Ismaili/Crop Trust.",
    "Dr. Mariana Yazbek and Dr. Ahmed Amri inside ICARDA-Terbol Genebank, Lebanon. 2018. Photo by Michael Major/Crop Trust.",
    "Dr. Norman Borlaug at ICARDA's Tel Hadya Research Station, Syria. 2005.",
    "Dr. Samar Attaher showing the results of drip irrigation system to farmers and extension agents at Sids Station, Beni Sueif, Egypt. 2024. Photo by Ahmed El Sheemy/ICARDA.",
    "Dr. Seid-Ahmed Kemal and Plant Pathology team showcasing plant diseases. Merchouch Station, Morocco. 2025. Photo by Ismail Belkhadir/ICARDA.",
    "Dr. Shiv Kumar Agrawal holding lentil plants at Terbol Station, Lebanon. 2019. Photo by Michael Major/Crop Trust.",
    "Dr. Wuletaw Tadesse Degu holding strands of wheat inside an ICARDA glasshouse in Rabat, Morocco. 2022. Photo by James Pursey/ICARDA.",
    "Mr. Aly Abousabaa with Queen Mathilde of Belgium after the European Union Walk for Climate in Brussels. June 2025. Photo by Belgi.",
    "Farmer holding wheat harvest. Beni Sueif, Egypt. 2020. Photo by James Pursey/ICARDA.",
    "Farmer using ICARDA's GeoAgro-Misr App in Kafr ElSheikh, Egypt. 2024. Photo by Ahmed El Sheemy/ICARDA.",
    "Farmer's daughter with her goats in Kafr El Sheikh, Egypt. 2024. Photo by Ahmed El Sheemy/ICARDA.",
    "Dr. Zakaria Kehel places the ICARDA50 celebratory hat (handmade by women's cooperatives in Morocco) on Harry, ICARDA's rescued and adopted donkey, in Merchouch, Morocco. 2025. Photo by Ismail Belkhadir/ICARDA.",
    "Herders in Rajasthan, India, photographed in October 2011 by Dr. Mounir Louhaichi.",
    "ICARDA's 50 year celebration, Rabat, Morocco. 2025. Photo by Ismail Belkhadir/ICARDA.",
    "ICARDA's Former Board of Trustees and Senior Management Team meeting with NARS Partners in Lebanon. 2023. Photo by: Roni Ziade/ICARDA.",
    "ICARDA Director General and INRA Director General with ICARDA Board of Trustees in Merchouch, Morocco. 2025. Photo by Ismail Belkhadir/ICARDA.",
    "ICARDA seed boxes arriving in Svalbard Vault, delivered by Dr. Ahmed Amri, Former ICARDA Head of Genetic Resources; Margret Thalwitz, Former ICARDA Board Chair; Marie Haga, Former Crop Trust CEO; Aly Abousabaa, ICARDA Director General. 2017. Photo by Crop Trust.",
    "Visit to the BOLD grasspea demonstration farm cultivated by Mrs. Shushila Parmar in Bamuliya, District Sehore, India. 2024. Photo by Michael Major/Crop Trust.",
    "Indian farmer carrying lentil harvest in West Bengal, India. 2018.",
    "Moroccan Farmer holding a strand of an ICARDA durum wheat variety, Morocco. 2023. Photo by Michael Major/Crop Trust.",
    'Rural women in Uzbekistan\'s Kashkadarya region trained in agri-business skills by ICARDA under the FAO-GEF "FOLUR" project. 2025.',
    "Students from SOS Hermann Gmeiner High School, Bindura, take part in the TAAT Workshop, Zimbabwe, 2025. Photo Jacqueline Tanhara, MLA-FWRD. Photo by Jacqueline Tanhara/MLAFWRD.",
    "ICARDA African Breeding Accelerator Inauguration in Rabat, Morocco. 2025. From Left to Right Dr. Tareq Alzabet, ICARDA Board Chair; Dr. Redouane Arrach, Secretary General of the MoA. Photo by Ismail Belkhadir/ICARDA.",
    "Tunisian lady farmers posing with the cactus chopper. GIZ-ICARDA Evaluation of Sustainable Forage Production, Tunisia. 2017.",
    "UNDP Goodwill Ambassador and endurance athlete Michael Haddad delivering ICARDA seeds to Dr Asmund Asdal at the Svalbard Global Seed Vault after completing his Arctic Walk. 2022.",
    "With Dr. Sawsan Hassan, women in Kangaon Village, Balangir District, Odisha State, proudly showcase their cactus nursery, established in 2019.",
    "South Asian traveling workshop on lentil, Kabuli chickpea, and lathyrus at the Indian Institute of Pulses Research, Kanpur, India. 2008.",
    "Georgia 2008.",
    "The Launch of ICARDA's Integrated Desert Farming Innovation Platform at Khalifa International Award for Date Palm and Agricultural Innovation (KIADPAI) in Abu Dhabi, UAE. 2022. Photo by KIADPAI.",
    "Turkey 2008.",
    "Dr. Vinay Nangia showcases a drip irrigation model to members of the CGIAR ISDC and SC during their annual meeting hosted by ICARDA in Rabat, Morocco. 2023. Photo by Ismail Belkhadir/ICARDA.",
    "Dr. Miguel Sanchez Garcia examining barley crops inside a speedbreeding lab in Rabat, Morocco. 2022. Photo by James Pursey/ICARDA.",
    "ICARDA scientists inside ICARDA's Tel Hadya genebank. 2006.",
    "Dr. Michael Baum pays tribute to late ICARDA scientists whose pioneering work laid the foundation for today's innovations. 2025. Photo by Ismail Belkhadir/ICARDA.",
    "Dr. Zewdie Bishaw with Ethiopian Woman Farmer during a farmer field day, Ethiopia. 2013.",
    "Farmer testing ICARDA's Raised Bed Machine in Beni Sueif, Egypt. 2023. Photo by Ahmed El Sheemy/ICARDA",
    "Dr. Safaa Kumari in her seed health lab in Lebanon. 2023. Photo by Roni Ziade/ICARDA.",
    "Farmers tasting red fruit of cactus pear in Madaba, Jordan. 2019. Photo by Dr. Sawsan Hassan/ICARDA.",
    "ICARDA Annual Planning Meeting in Amman, Jordan. 2014.",
    "Dr. Mohie Omar, Dr. Augusto Becerra, and Mr. Aly Abousabaa with H.E. Hani Sewilam, Minister of Water Resources and Irrigation in Egypt, at Cairo Water Week 2025. Photo by Mohamed El Sherif/ICARDA.",
    "Women Cooperative preparing Couscous in Morocco. 2024. Photo by Adnane Azizi/ICARDA.",
    "Members of a women's cereal processors and producers' group in Sanar Walof village near Saint-Louis, Senegal. 2024. Photo by Ollivier Girard/ICARDA.",
    "Seed regeneration plots at ICARDA's Terbol Station in Lebanon's Bekaa Valley. 2018. Photo by Michael Major/Crop Trust.",
    "Inside ICARDA's Biotechnology Lab in Tel Hadya in 2009.",
    "Egyptian farmer enjoying a traditional cup of tea in his field in Beni Sueif, Egypt. 2024 Photo by Ahmed El Sheemy/ICARDA.",
    "ICARDA's Food Legume Research Platform (FLRP) near Bhopal in the Indian state of Madhya Pradesh. 2015.",
  ];

  const galleryGrid = document.querySelector("#gallery-grid");
  const galleryItems = document.querySelectorAll("[data-gallery-item]");

  if (galleryGrid && galleryItems.length > 0) {
    const imageNumbers = Array.from({ length: 60 }, (_, i) => i + 1);

    function shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    const shuffledImageNumbers = shuffleArray(imageNumbers);
    let currentIndex = 0;
    const itemsPerLoad = 6;

    function createGalleryItem(imageNumber, isFirstCard = false) {
      const colDiv = document.createElement("div");
      colDiv.className = isFirstCard ? "col-span-8" : "col-span-4";

      const cardDiv = document.createElement("div");
      cardDiv.className = isFirstCard
        ? "gallery__card first__card"
        : "gallery__card";
      cardDiv.setAttribute("data-gallery-item", "");

      const imageUrl = `./assets/images/gallery/${imageNumber}.jpg`;

      const link = document.createElement("a");
      link.href = imageUrl;
      link.setAttribute("data-fslightbox", "gallery");
      link.setAttribute("data-gallery-link", "");
      link.setAttribute("data-type", "image");
      const captionText =
        captions[imageNumber - 1] || `Gallery Image ${imageNumber}`;
      link.setAttribute("data-caption", captionText);

      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = captions[imageNumber - 1] || `Gallery Image ${imageNumber}`;
      img.setAttribute("data-gallery-img", "");

      img.onerror = function () {
        console.warn(`Failed to load image: ${imageUrl}`);
        this.alt = `Gallery Image ${imageNumber} - Image not found`;
      };

      link.appendChild(img);

      const plusButton = document.createElement("div");
      plusButton.className = "gallery__card__btn";
      const icon = document.createElement("i");
      icon.className = "icon";
      icon.setAttribute("data-lucide-size", "20");
      icon.setAttribute("data-lucide", "plus");
      plusButton.appendChild(icon);

      const caption = document.createElement("p");
      caption.setAttribute("data-gallery-caption", "");
      caption.textContent =
        captions[imageNumber - 1] || `Gallery Image ${imageNumber}`;

      cardDiv.appendChild(link);
      cardDiv.appendChild(plusButton);
      cardDiv.appendChild(caption);
      colDiv.appendChild(cardDiv);

      plusButton.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        link.click();
      });

      return colDiv;
    }

    function initializeGalleryItem(item, index) {
      const img = item.querySelector("[data-gallery-img]");
      const caption = item.querySelector("[data-gallery-caption]");
      const link = item.querySelector("[data-gallery-link]");

      if (img && currentIndex < shuffledImageNumbers.length) {
        const imageNumber = shuffledImageNumbers[currentIndex];
        const imageUrl = `./assets/images/gallery/${imageNumber}.jpg`;

        img.src = imageUrl;
        img.alt = captions[imageNumber - 1] || `Gallery Image ${imageNumber}`;

        if (link) {
          link.href = imageUrl;
          if (!link.hasAttribute("data-fslightbox")) {
            link.setAttribute("data-fslightbox", "gallery");
          }
          link.setAttribute("data-type", "image");
          const captionText =
            captions[imageNumber - 1] || `Gallery Image ${imageNumber}`;
          link.setAttribute("data-caption", captionText);
        }

        img.onerror = function () {
          console.warn(`Failed to load image: ${imageUrl}`);
          this.alt = `Gallery Image ${imageNumber} - Image not found`;
        };
      }

      if (caption && currentIndex < shuffledImageNumbers.length) {
        const imageNumber = shuffledImageNumbers[currentIndex];
        caption.textContent =
          captions[imageNumber - 1] || `Gallery Image ${imageNumber}`;
      }

      const plusButton = item.querySelector(".gallery__card__btn");
      if (plusButton && link) {
        plusButton.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          link.click();
        });
      }

      currentIndex++;
    }

    galleryItems.forEach((item, index) => {
      initializeGalleryItem(item, index);
    });

    let imagesAutoLoaded = false;

    function loadAllRemainingImages() {
      if (currentIndex >= shuffledImageNumbers.length || imagesAutoLoaded) {
        return;
      }

      imagesAutoLoaded = true;

      const fragment = document.createDocumentFragment();
      const remainingCount = shuffledImageNumbers.length - currentIndex;

      for (let i = 0; i < remainingCount; i++) {
        const imageNumber = shuffledImageNumbers[currentIndex];
        const galleryItem = createGalleryItem(imageNumber, false);
        fragment.appendChild(galleryItem);
        currentIndex++;
      }

      galleryGrid.appendChild(fragment);

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }

      const loadMoreButton = document.querySelector(".gallery .btn");
      if (loadMoreButton) {
        loadMoreButton.style.display = "none";
      }

      setTimeout(() => {
        const lightboxContainer = document.querySelector(
          ".fslightbox-container"
        );
        const isLightboxOpen =
          lightboxContainer &&
          window.getComputedStyle(lightboxContainer).display !== "none";

        let currentSlide = currentSlideIndex;

        if (isLightboxOpen && currentSlide >= 0) {
          if (typeof window.fsLightboxInstances !== "undefined") {
            const galleryInstance = window.fsLightboxInstances["gallery"];
            if (galleryInstance && galleryInstance.close) {
              galleryInstance.close();
            }
          }
        }

        if (typeof refreshFsLightbox === "function") {
          refreshFsLightbox();
        }

        if (isLightboxOpen && currentSlide >= 0) {
          setTimeout(() => {
            if (typeof window.fsLightboxInstances !== "undefined") {
              const galleryInstance = window.fsLightboxInstances["gallery"];
              if (galleryInstance && galleryInstance.open) {
                galleryInstance.open(currentSlide);
              }
            }
            if (typeof buildCaptionMap === "function") {
              buildCaptionMap();
            }
          }, 100);
        } else {
          if (typeof buildCaptionMap === "function") {
            setTimeout(() => {
              buildCaptionMap();
            }, 100);
          }
        }
      }, 300);
    }

    const loadMoreButton = document.querySelector(".gallery .btn");

    if (loadMoreButton) {
      loadMoreButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (currentIndex >= shuffledImageNumbers.length) {
          loadMoreButton.style.display = "none";
          return;
        }

        for (
          let i = 0;
          i < itemsPerLoad && currentIndex < shuffledImageNumbers.length;
          i++
        ) {
          const imageNumber = shuffledImageNumbers[currentIndex];
          const galleryItem = createGalleryItem(imageNumber, false);
          galleryGrid.appendChild(galleryItem);
          currentIndex++;
        }

        if (typeof refreshFsLightbox === "function") {
          setTimeout(() => {
            refreshFsLightbox();
            if (typeof buildCaptionMap === "function") {
              buildCaptionMap();
            }
          }, 100);
        }

        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }

        if (currentIndex >= shuffledImageNumbers.length) {
          loadMoreButton.style.display = "none";
        }
      });

      if (currentIndex >= shuffledImageNumbers.length) {
        loadMoreButton.style.display = "none";
      }
    }

    if (typeof refreshFsLightbox === "function") {
      setTimeout(() => {
        refreshFsLightbox();
      }, 300);
    }

    const imageCaptionMap = new Map();
    const imageUrlToIndexMap = new Map();
    const indexToCaptionMap = new Map();
    let clickedLink = null;
    let currentSlideIndex = -1;
    let isUpdating = false;
    let updateTimeout = null;

    function buildCaptionMap() {
      imageCaptionMap.clear();
      imageUrlToIndexMap.clear();
      indexToCaptionMap.clear();

      const allLinks = document.querySelectorAll(
        '[data-fslightbox="gallery"][data-gallery-link]'
      );
      allLinks.forEach((link, index) => {
        const imageUrl = link.getAttribute("href");
        const caption =
          link.getAttribute("data-caption") ||
          link.querySelector("img")?.alt ||
          "";
        if (imageUrl) {
          imageCaptionMap.set(imageUrl, caption);
          imageUrlToIndexMap.set(imageUrl, index);
          indexToCaptionMap.set(index, caption);
        }
      });
    }

    function getOrCreateCaptionElement() {
      let captionEl = document.getElementById("gallery-lightbox-caption");
      if (!captionEl) {
        captionEl = document.createElement("div");
        captionEl.id = "gallery-lightbox-caption";
        captionEl.className = "gallery-lightbox-caption";
        document.body.appendChild(captionEl);
      }
      return captionEl;
    }

    function updateCaption() {
      if (isUpdating) {
        return;
      }

      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }

      updateTimeout = setTimeout(() => {
        isUpdating = true;

        try {
          const lightboxContainer = document.querySelector(
            ".fslightbox-container"
          );

          if (!lightboxContainer) {
            const captionEl = document.getElementById(
              "gallery-lightbox-caption"
            );
            if (captionEl) {
              captionEl.style.opacity = "0";
            }
            isUpdating = false;
            return;
          }

          const isVisible =
            window.getComputedStyle(lightboxContainer).display !== "none";
          if (!isVisible) {
            const captionEl = document.getElementById(
              "gallery-lightbox-caption"
            );
            if (captionEl) {
              captionEl.style.opacity = "0";
            }
            isUpdating = false;
            return;
          }

          const captionEl = getOrCreateCaptionElement();

          let currentImg = null;
          let imageUrl = null;

          const sources =
            lightboxContainer.querySelectorAll(".fslightbox-source");
          for (let source of sources) {
            const hasOpacity0 = source.classList.contains(
              "fslightbox-opacity-0"
            );
            if (!hasOpacity0) {
              const img = source.querySelector("img");
              if (img && img.src) {
                const rect = img.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                  currentImg = img;
                  imageUrl = img.src;
                  break;
                }
              }
            }
          }

          if (!currentImg) {
            const allImgs = lightboxContainer.querySelectorAll("img");
            for (let img of allImgs) {
              if (img.src) {
                const rect = img.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                  currentImg = img;
                  imageUrl = img.src;
                  break;
                }
              }
            }
          }

          if (!currentImg && clickedLink) {
            const clickedUrl = clickedLink.getAttribute("href");
            if (clickedUrl) {
              imageUrl = clickedUrl;
            }
          }

          let caption = "";

          if (imageUrl) {
            const normalizedUrl = imageUrl.split("?")[0].split("#")[0];

            for (let [url, cap] of imageCaptionMap.entries()) {
              const normalizedMapUrl = url.split("?")[0].split("#")[0];
              if (
                normalizedMapUrl === normalizedUrl ||
                imageUrl.includes(url) ||
                url.includes(normalizedUrl) ||
                normalizedUrl.includes(normalizedMapUrl) ||
                normalizedMapUrl.includes(normalizedUrl)
              ) {
                caption = cap;
                const matchedIndex = imageUrlToIndexMap.get(url);
                if (matchedIndex !== undefined) {
                  currentSlideIndex = matchedIndex;
                }
                break;
              }
            }
          }

          if (
            !caption &&
            currentSlideIndex >= 0 &&
            indexToCaptionMap.has(currentSlideIndex)
          ) {
            caption = indexToCaptionMap.get(currentSlideIndex);
          }

          if (!caption && clickedLink) {
            caption =
              clickedLink.getAttribute("data-caption") ||
              clickedLink.querySelector("img")?.alt ||
              "";
          }

          if (!caption && currentImg) {
            caption = currentImg.alt || "";
          }

          if (caption) {
            captionEl.textContent = caption;
            captionEl.style.opacity = "1";
          } else {
            captionEl.style.opacity = "0";
          }
        } catch (error) {
          console.error("Error updating caption:", error);
        } finally {
          isUpdating = false;
        }
      }, 100);
    }

    document.addEventListener(
      "click",
      (e) => {
        const link = e.target.closest(
          '[data-fslightbox="gallery"][data-gallery-link]'
        );
        if (link && !imagesAutoLoaded) {
          e.preventDefault();
          e.stopPropagation();

          clickedLink = link;

          const clickedHref = link.getAttribute("href") || link.href;

          const fragment = document.createDocumentFragment();
          const remainingCount = shuffledImageNumbers.length - currentIndex;

          for (let i = 0; i < remainingCount; i++) {
            const imageNumber = shuffledImageNumbers[currentIndex];
            const galleryItem = createGalleryItem(imageNumber, false);
            fragment.appendChild(galleryItem);
            currentIndex++;
          }

          galleryGrid.appendChild(fragment);
          imagesAutoLoaded = true;

          if (typeof lucide !== "undefined") {
            lucide.createIcons();
          }

          const loadMoreButton = document.querySelector(".gallery .btn");
          if (loadMoreButton) {
            loadMoreButton.style.display = "none";
          }

          setTimeout(() => {
            if (typeof refreshFsLightbox === "function") {
              refreshFsLightbox();
            }

            setTimeout(() => {
              const allLinks = document.querySelectorAll(
                '[data-fslightbox="gallery"][data-gallery-link]'
              );
              let targetIndex = 0;

              allLinks.forEach((l, index) => {
                const lHref = l.getAttribute("href") || l.href;
                if (lHref === clickedHref || l === link) {
                  targetIndex = index;
                  currentSlideIndex = index;
                }
              });

              let lightboxOpened = false;

              if (typeof window.fsLightboxInstances !== "undefined") {
                const galleryInstance = window.fsLightboxInstances["gallery"];
                if (galleryInstance && galleryInstance.open) {
                  try {
                    galleryInstance.open(targetIndex);
                    lightboxOpened = true;
                  } catch (err) {
                    console.warn("Error opening lightbox:", err);
                  }
                }
              }

              if (
                !lightboxOpened &&
                typeof window.fsLightbox !== "undefined" &&
                window.fsLightbox.open
              ) {
                try {
                  window.fsLightbox.open(targetIndex);
                  lightboxOpened = true;
                } catch (err) {
                  console.warn("Error opening lightbox:", err);
                }
              }

              if (!lightboxOpened) {
                setTimeout(() => {
                  link.click();
                }, 50);
              }

              const captionEl = getOrCreateCaptionElement();
              const caption =
                link.getAttribute("data-caption") ||
                link.querySelector("img")?.alt ||
                "";
              if (caption) {
                captionEl.textContent = caption;
                captionEl.style.opacity = "1";
              }

              if (typeof buildCaptionMap === "function") {
                setTimeout(() => {
                  buildCaptionMap();
                }, 100);
              }
            }, 200);
          }, 100);
        } else if (link) {
          clickedLink = link;

          const allLinks = document.querySelectorAll(
            '[data-fslightbox="gallery"][data-gallery-link]'
          );
          allLinks.forEach((l, index) => {
            if (l === link) {
              currentSlideIndex = index;
            }
          });

          const captionEl = getOrCreateCaptionElement();
          const caption =
            link.getAttribute("data-caption") ||
            link.querySelector("img")?.alt ||
            "";
          if (caption) {
            captionEl.textContent = caption;
            captionEl.style.opacity = "1";
          }

          setTimeout(updateCaption, 300);
          setTimeout(updateCaption, 600);
        }
      },
      true
    );

    function initCaptionSystem() {
      buildCaptionMap();

      getOrCreateCaptionElement();

      let lightboxContainer = null;
      const observer = new MutationObserver((mutations) => {
        const currentContainer = document.querySelector(
          ".fslightbox-container"
        );
        if (currentContainer !== lightboxContainer) {
          lightboxContainer = currentContainer;
          if (lightboxContainer) {
            const isVisible =
              window.getComputedStyle(lightboxContainer).display !== "none";
            if (isVisible) {
              setTimeout(() => {
                loadAllRemainingImages();
              }, 200);
            }
            updateCaption();
          } else {
            const captionEl = document.getElementById(
              "gallery-lightbox-caption"
            );
            if (captionEl) {
              captionEl.style.opacity = "0";
            }
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: false,
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          const allLinks = document.querySelectorAll(
            '[data-fslightbox="gallery"][data-gallery-link]'
          );
          if (allLinks.length > 0) {
            if (currentSlideIndex <= 0) {
              currentSlideIndex = allLinks.length - 1;
            } else {
              currentSlideIndex--;
            }
          }
          setTimeout(updateCaption, 200);
        } else if (e.key === "ArrowRight") {
          const allLinks = document.querySelectorAll(
            '[data-fslightbox="gallery"][data-gallery-link]'
          );
          if (allLinks.length > 0) {
            if (currentSlideIndex >= allLinks.length - 1) {
              currentSlideIndex = 0;
            } else {
              currentSlideIndex++;
            }
          }
          setTimeout(updateCaption, 200);
        } else if (e.key === "Escape") {
          setTimeout(() => {
            const container = document.querySelector(".fslightbox-container");
            if (
              !container ||
              window.getComputedStyle(container).display === "none"
            ) {
              const captionEl = document.getElementById(
                "gallery-lightbox-caption"
              );
              if (captionEl) {
                captionEl.style.opacity = "0";
              }
            }
          }, 100);
        }
      });

      document.addEventListener("click", (e) => {
        const prevBtn = e.target.closest(
          ".fslightbox-slide-btn-container-previous"
        );
        const nextBtn = e.target.closest(
          ".fslightbox-slide-btn-container-next"
        );
        const closeBtn = e.target.closest(".fslightbox-toolbar-button");

        if (prevBtn) {
          const allLinks = document.querySelectorAll(
            '[data-fslightbox="gallery"][data-gallery-link]'
          );
          if (allLinks.length > 0) {
            if (currentSlideIndex <= 0) {
              currentSlideIndex = allLinks.length - 1;
            } else {
              currentSlideIndex--;
            }
          }
          setTimeout(updateCaption, 250);
        } else if (nextBtn) {
          const allLinks = document.querySelectorAll(
            '[data-fslightbox="gallery"][data-gallery-link]'
          );
          if (allLinks.length > 0) {
            if (currentSlideIndex >= allLinks.length - 1) {
              currentSlideIndex = 0;
            } else {
              currentSlideIndex++;
            }
          }
          setTimeout(updateCaption, 250);
        } else if (closeBtn) {
          setTimeout(() => {
            const container = document.querySelector(".fslightbox-container");
            if (
              !container ||
              window.getComputedStyle(container).display === "none"
            ) {
              const captionEl = document.getElementById(
                "gallery-lightbox-caption"
              );
              if (captionEl) {
                captionEl.style.opacity = "0";
              }
            }
          }, 100);
        }
      });

      let touchStartX = 0;
      document.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
      });
      document.addEventListener("touchend", (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          setTimeout(updateCaption, 200);
        }
      });

      let captionInterval = null;
      const checkLightbox = () => {
        const container = document.querySelector(".fslightbox-container");
        const isOpen =
          container && window.getComputedStyle(container).display !== "none";

        if (isOpen) {
          loadAllRemainingImages();

          if (!captionInterval) {
            captionInterval = setInterval(() => {
              const container = document.querySelector(".fslightbox-container");
              const isStillOpen =
                container &&
                window.getComputedStyle(container).display !== "none";
              if (isStillOpen) {
                updateCaption();
              } else {
                const captionEl = document.getElementById(
                  "gallery-lightbox-caption"
                );
                if (captionEl) {
                  captionEl.style.opacity = "0";
                }
                clearInterval(captionInterval);
                captionInterval = null;
              }
            }, 1000);
          }
        } else {
          const captionEl = document.getElementById("gallery-lightbox-caption");
          if (captionEl) {
            captionEl.style.opacity = "0";
          }
          if (captionInterval) {
            clearInterval(captionInterval);
            captionInterval = null;
          }
        }
      };

      setInterval(checkLightbox, 500);

      setTimeout(updateCaption, 500);
    }

    setTimeout(initCaptionSystem, 500);

    const galleryCards = document.querySelectorAll(".gallery__card");
    galleryCards.forEach((card) => {
      const link = card.querySelector("a");
      if (!link) return;

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        link.style.setProperty("--tooltip-x", `${x}px`);
        link.style.setProperty("--tooltip-y", `${y}px`);
      });

      card.addEventListener("mouseleave", () => {
        link.style.removeProperty("--tooltip-x");
        link.style.removeProperty("--tooltip-y");
      });
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const cards = node.matches?.(".gallery__card")
              ? [node]
              : node.querySelectorAll?.(".gallery__card") || [];

            cards.forEach((card) => {
              const link = card.querySelector("a");
              if (!link) return;

              card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                link.style.setProperty("--tooltip-x", `${x}px`);
                link.style.setProperty("--tooltip-y", `${y}px`);
              });

              card.addEventListener("mouseleave", () => {
                link.style.removeProperty("--tooltip-x");
                link.style.removeProperty("--tooltip-y");
              });
            });
          }
        });
      });
    });

    if (galleryGrid) {
      observer.observe(galleryGrid, {
        childList: true,
        subtree: true,
      });
    }
  }
});
