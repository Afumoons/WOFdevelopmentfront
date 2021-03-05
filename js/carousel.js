var swiperheader = new Swiper(".swiper-container.header-carousel", {
  loop: true,
  lazy: true,
  slidesPerView: "auto",
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  centeredSlides: true,
  spaceBetween: 30,
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
  slidesPerView: 3,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  centeredSlides: true,
  spaceBetween: 30,
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

var swipergaleri = new Swiper(".swiper-container.galeri-carousel", {
  loop: true,
  lazy: true,
  slidesPerView: 3,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  centeredSlides: true,
  spaceBetween: 30,
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

var swipertestimoni = new Swiper(".swiper-container.testimoni-carousel", {
  loop: true,
  lazy: true,
  slidesPerView: 1,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  centeredSlides: true,
  spaceBetween: 30,
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
  slidesPerView: 5,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
});

var swiperclient = new Swiper(".swiper-container.client-carousel", {
  loop: true,
  lazy: true,
  slidesPerView: 3,
  effect: "slide",
  speed: 1000,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    // reverseDirection: true,
  },
});
