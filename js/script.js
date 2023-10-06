$(document).ready(function () {
  let owl = $("#owl-demo");

  owl.owlCarousel({
    items: 3,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
  });

  let owl_gallery = $("#owl-gallery");

  owl_gallery.owlCarousel({
    items: 3,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
  });
  $(".next").click(function () {
    owl_gallery.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl_gallery.trigger("owl.prev");
  });
});

//onload popup show
$(window).on("load", function () {
  // setTimeout(() => {
  //   $(".modal").modal("show");
  // }, 3000);
});

// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      //hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
  showTapToTop();
});

//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");
function showTapToTop() {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;

  if (pos > posHight - 2500) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }
}

tap_top_btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};
