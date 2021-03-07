/* DOM Pre loader
  -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  var myVar;
  setTimeout(preloaderFun, 1000);
  setTimeout(preloaderFunhapus, 2500);

  function preloaderFun() {
    document.querySelector(".preloader").classList.add("hilang");
  }
  function preloaderFunhapus() {
    document.querySelector(".preloader").classList.add("hapus");
  }
});

/* Button scroll top
  -----------------------------------------------*/
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
    // burger.classList.toggle("toggle-burger");
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
  });
};

/* Scroll Function
  -----------------------------------------------*/
const scrollPage = () => {
  const btnup = document.querySelector(".btnup");
  const nav = document.querySelector(".navbar");

  // When the user scrolls down 700px from the top of the document, show the button, when scrolls down 200px navbar background to white
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
};

/* Navbar Modification DOM
  -----------------------------------------------*/
const navMod = () => {
  const navlinks = document.querySelector(".navbar .nav-links");
  const navlinksitem = navlinks.querySelectorAll("li");
  if (navlinksitem.length == 1) {
    navlinks.style.justifyContent = "flex-end";
  }
};

/* Qty Button DOM
  -----------------------------------------------*/
const qtyButton = () => {
  const qty = document.querySelector(
    ".section-product .field-teks .button-cart .qty"
  );
  const qtytambah = qty.querySelector("#qty-tambah");
  const qtykurang = qty.querySelector("#qty-kurang");
  const angka = qty.querySelector(".angka");
  $jumlah = 1;
  qtytambah.addEventListener("click", () => {
    $jumlah = $jumlah + 1;
    angka.innerHTML = $jumlah;
  });
  qtykurang.addEventListener("click", () => {
    if (angka.innerHTML == 0) {
      return;
    } else {
      $jumlah = $jumlah - 1;
      angka.innerHTML = $jumlah;
    }
  });
};

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

// timeoutfun();
// preloaderFun();
// navSlide();
// fancy();
