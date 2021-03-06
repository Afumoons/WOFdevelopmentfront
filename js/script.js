/* DOM Pre loader
  -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  var myVar;
  setTimeout(preloaderFun, 1000);
  //setTimeout(preloaderFun, 500);
  setTimeout(preloaderFunhapus, 2500);
  //setTimeout(preloaderFunhapus, 1000);

  function preloaderFun() {
    document.querySelector(".preloader").classList.add("hilang");
  }
  function preloaderFunhapus() {
    document.querySelector(".preloader").classList.add("hapus");
  }
});

/* DOM Navbar
  -----------------------------------------------*/
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  let toggle = 0;
  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    // Burger animation
    if (toggle == 0) {
      burger.classList.remove("toggle-burger2");
      burger.classList.add("toggle-burger");
      toggle = 1;
      return;
    } else {
      burger.classList.remove("toggle-burger");
      burger.classList.add("toggle-burger2");
      toggle = 0;
      return;
    }
    // burger.classList.toggle("toggle-burger");
  });
};
navSlide();
// // Nav preloader function
// const timeoutfun = () => {
//   const preloader = document.querySelector(".preloader");
//   setTimeout(preloaderFun(preloader), 3000);
//   // setTimeout(preloaderFunhapus(preloader), 2000);
// };
// const preloaderFun = (preloader) => {
//   preloader.classList.add("hilang");
// };
// const preloaderFunhapus = (preloader) => {
//   preloader.classList.add("hapus");
// };

// //  Nav slide function
// const navSlide = () => {
//   const btnup = document.querySelector(".btnup");
//   const burger = document.querySelector(".navbar_burger");
//   const nav_links = document.querySelector(".navbar_nav-links");
//   const linksli = document.querySelectorAll(".navbar_nav-links li");
//   burger.addEventListener("click", () => {
//     // Toggle Nav
//     nav_links.classList.toggle("navbar_nav-links-active");
//     // Animate Links
//     linksli.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 7 + 0.4
//         }s`;
//       }
//     });
//     // Burger animation
//     burger.classList.toggle("navbar_toggle-burger");

//     // Hide the btnup
//     btnup.classList.toggle("btnup_nav-active");
//   });
// };

// Scroll function
const scrollPage = () => {
  const btnup = document.querySelector(".btnup");
  // const burger = document.querySelector(".navbar_burger");
  const nav = document.querySelector(".navbar");
  // const nav_links = document.querySelector(".navbar_nav-links");
  // const nav_logo = document.querySelector(".navbar_logo");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      btnup.classList.add("btnup_scroll");
    } else if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      nav.classList.add("animate");
    } else {
      nav.classList.remove("animate");
      btnup.classList.remove("btnup_scroll");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
};
scrollPage();

// const fancy = () => {
//   const text = document.querySelector(".layar-depan_text");
//   const strText = text.textContent;
//   const splitText = strText.split("");
//   text.textContent = "";

//   for (let i = 0; i < splitText.length; i++) {
//     text.innerHTML += '<span class="animate">' + splitText[i] + "</span>";
//   }

//   let char = 0;
//   let timer = setInterval(onTick, 50);

//   function onTick() {
//     const span = text.querySelectorAll("span")[char];
//     span.classList.add("fade");
//     char++;
//     if (char === splitText.length) {
//       complete();
//       return;
//     }
//   }

//   function complete() {
//     clearInterval(timer);
//     timer = null;
//   }
// };

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// timeoutfun();
// preloaderFun();
// navSlide();
// fancy();
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: "aos-init", // class applied after initialization
//   animatedClassName: "aos-animate", // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 1000, // values from 0 to 3000, with step 50ms
//   easing: "ease", // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
// });
