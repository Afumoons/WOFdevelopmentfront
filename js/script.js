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
  if (navlinksitem.length == 2) {
    navlinks.style.justifyContent = "flex-end";
  }
};

/* Shop Menu Button DOM
  -----------------------------------------------*/
const shopMenu = () => {
  const burgerButton = document.querySelector(
    ".section-judul .field-kiri .burger"
  );
  const burgerButton2 = document.querySelector(
    ".section-judul .field-kiri .menu .burger"
  );
  const menu = document.querySelector(".section-judul .field-kiri .menu");
  burgerButton.addEventListener("click", () => {
    menu.classList.toggle("animate");
  });
  burgerButton2.addEventListener("click", () => {
    menu.classList.remove("animate");
  });
  // burgerButton.addEventListener("focusout", () => {
  //   menu.classList.remove("animate");
  // });
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

/* Zoom Button DOM
  -----------------------------------------------*/
const zoomButton = () => {
  const buttonZoom = document.querySelector(
    ".section-product .field-gambar .icon"
  );
  const overlayGambar = document.querySelector(".overlay-gambar");
  buttonZoom.addEventListener("click", () => {
    overlayGambar.classList.add("animate");
  });
  overlayGambar.addEventListener("click", () => {
    overlayGambar.classList.remove("animate");
  });
};

/* Assembly Button DOM
  -----------------------------------------------*/
const assemblyButton = () => {
  const buttonAssembly = document.querySelector(
    ".section-product .field-teks .field-button .button.assembly"
  );
  const overlayBackground = document.querySelector(".overlay-background");
  const sectionAssembly = document.querySelector(".section-assembly");
  const crossButton = sectionAssembly.querySelector(".cross");
  buttonAssembly.addEventListener("click", () => {
    overlayBackground.classList.add("animate");
    sectionAssembly.classList.add("animate");
  });
  overlayBackground.addEventListener("click", () => {
    overlayBackground.classList.remove("animate");
    sectionAssembly.classList.remove("animate");
  });
  crossButton.addEventListener("click", () => {
    overlayBackground.classList.remove("animate");
    sectionAssembly.classList.remove("animate");
  });
};

/* Detail Button DOM
  -----------------------------------------------*/
const detailButton = () => {
  const buttonDetail = document.querySelector(
    ".section-product .field-teks .field-button .button.detail"
  );
  const overlayBackground = document.querySelector(".overlay-background");
  const sectionDetail = document.querySelector(".section-detail");
  const crossButton = sectionDetail.querySelector(".cross");
  buttonDetail.addEventListener("click", () => {
    overlayBackground.classList.add("animate");
    sectionDetail.classList.add("animate");
  });
  overlayBackground.addEventListener("click", () => {
    overlayBackground.classList.remove("animate");
    sectionDetail.classList.remove("animate");
  });
  crossButton.addEventListener("click", () => {
    overlayBackground.classList.remove("animate");
    sectionDetail.classList.remove("animate");
  });
};

/* Ganti Gambar
  -----------------------------------------------*/
const gantiGambar = () => {
  const fieldGambar = document.querySelector(".section-product .field-gambar");
  const gambarUtama = fieldGambar.querySelector(".gambar");
  const iconGambar = fieldGambar.querySelectorAll(
    ".field-icon.mobile-hidden .gambar-icon"
  );
  const gambar0 = iconGambar[0].src;
  const gambar1 = iconGambar[1].src;
  const gambar2 = iconGambar[2].src;
  const gambar3 = iconGambar[3].src;
  iconGambar[0].addEventListener("click", () => {
    gambarUtama.src = gambar0;
  });
  iconGambar[1].addEventListener("click", () => {
    gambarUtama.src = gambar1;
  });
  iconGambar[2].addEventListener("click", () => {
    gambarUtama.src = gambar2;
  });
  iconGambar[3].addEventListener("click", () => {
    gambarUtama.src = gambar3;
  });
};

/* Custom Select
  -----------------------------------------------*/
const customSelect = () => {
  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
};
