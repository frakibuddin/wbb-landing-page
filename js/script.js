$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl_gallery = $("#owl-gallery");

  owl_gallery.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });
  // Custom Navigation Events
  $(".next").click(function () {
    owl_gallery.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl_gallery.trigger("owl.prev");
  });
});
