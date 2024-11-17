const dialog = document.getElementById("mobileOverlay");

function closeMobileOverlay() {
  dialog.close();
}

function courses_swiper() {
  const swiper = new Swiper(".courses__swiper", {
    slidesPerView: 1,
    spaceBetween: 48,

    pagination: {
      el: ".courses__swiper-pagination",
      type: "bullets",
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 2,
      },
    },
  });
}

function workshop_swiper() {
  const swiper = new Swiper(".workshop__swiper", {
    slidesPerView: 1,
    spaceBetween: 48,

    pagination: {
      el: ".workshop__swiper-pagination",
      type: "bullets",
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 2,
      },
    },
  });
}

courses_swiper();
workshop_swiper();
