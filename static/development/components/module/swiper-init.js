const swiper = new Swiper('#sw-01', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});

const swiper_new = new Swiper('.slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
breakpoints: {
    // when window width is >= 320px
    300: {
      pagination: false,
      slidesPerView: 2,
      spaceBetween: 45
    },
    420: {
      pagination: false,
      slidesPerView: 2,
      spaceBetween: 65
    },
    620: {
      slidesPerView: 3,
      spaceBetween: 75
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 75
    },
    880: {
      slidesPerView: 3,
      spaceBetween: 90
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 90
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 95
    }
  }
});

const swiper_blog = new Swiper('.blog', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
breakpoints: {
    // when window width is >= 320px
    300: {
      pagination: false,
      slidesPerView: 1,
      spaceBetween: 30
    },
    480: {
      pagination: false,
      slidesPerView: 2,
      spaceBetween: 35
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    860: {
      slidesPerView: 3,
      spaceBetween: 50
    },
  }
});