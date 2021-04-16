var swiperheader = new Swiper(".swiper-container.header-carousel", {
  loop: true,
  lazy: true,
  slidesPerView: "auto",
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
});

var swiperblog = new Swiper(".swiper-container.blog-carousel", {
  loop: true,
  lazy: true,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  slidesPerView: 2,
  spaceBetween: 19,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swipergaleri = new Swiper(".swiper-container.galeri-carousel", {
  loop: true,
  lazy: true,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  slidesPerView: 2,
  spaceBetween: 19,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swipertestimoni = new Swiper(".swiper-container.testimoni-carousel", {
  loop: true,
  lazy: true,
  slidesPerView: 1,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
});

var swiperteam = new Swiper(".swiper-container.team-carousel", {
  loop: true,
  lazy: true,
  // slidesPerColumn: 4,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  slidesPerView: 2,
  spaceBetween: 19,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiperclient = new Swiper(".swiper-container.client-carousel", {
  loop: true,
  lazy: true,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  slidesPerView: 3,
  spaceBetween: 19,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

var swiperreview = new Swiper(".swiper-container.review-carousel", {
  loop: true,
  lazy: true,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiperrelated = new Swiper(".swiper-container.related-carousel", {
  loop: true,
  lazy: true,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
