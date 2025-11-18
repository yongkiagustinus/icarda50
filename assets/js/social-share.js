document.addEventListener("DOMContentLoaded", function () {
  const socialShareLinks = document.querySelectorAll(".social__share__item a");
  const pageUrl = window.location.href;
  const pageTitle =
    document.title || "A Legacy in the Drylands 50 Years of ICARDA";
  const pageDescription =
    "ICARDA's 50-year journey of science-driven innovation for resilient drylands.";

  if (typeof Toastify === "undefined") {
    console.warn("Toastify not loaded");
  }

  function showToast(message, type = "success") {
    if (typeof Toastify !== "undefined") {
      Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: type === "success" ? "#4caf50" : "#f44336",
        stopOnFocus: true,
      }).showToast();
    } else {
      alert(message);
    }
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Link copied to clipboard!", "success");
      return true;
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        showToast("Link copied to clipboard!", "success");
        return true;
      } catch (err) {
        showToast("Failed to copy link", "error");
        return false;
      } finally {
        document.body.removeChild(textArea);
      }
    }
  }

  function getShareUrl(platform) {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedTitle = encodeURIComponent(pageTitle);
    const encodedDescription = encodeURIComponent(pageDescription);

    switch (platform) {
      case "x":
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      case "mail":
      case "email":
        return `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`;
      default:
        return pageUrl;
    }
  }

  function getPlatformFromIcon(icon) {
    if (!icon) return null;

    const src = (icon.getAttribute("src") || "").toLowerCase();
    const alt = (icon.getAttribute("alt") || "").toLowerCase();
    const combined = src + " " + alt;

    if (
      combined.includes("x.svg") ||
      combined.includes("twitter") ||
      combined.includes("x")
    )
      return "x";
    if (combined.includes("facebook")) return "facebook";
    if (combined.includes("linkedin")) return "linkedin";
    if (combined.includes("mail") || combined.includes("email")) return "mail";
    if (combined.includes("link") || combined.includes("copy")) return "copy";

    return null;
  }

  socialShareLinks.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const icon = this.querySelector("img");
      const platform = getPlatformFromIcon(icon);

      if (platform === "copy") {
        copyToClipboard(pageUrl);
      } else if (platform) {
        const shareUrl = getShareUrl(platform);

        if (platform === "mail") {
          window.location.href = shareUrl;
        } else {
          const windowFeatures =
            "width=600,height=400,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes";
          const popup = window.open(shareUrl, "Share", windowFeatures);

          if (popup) {
            popup.focus();
          }
        }
      } else {
        console.warn("Could not identify platform for social share link", link);
      }
    });
  });
});
