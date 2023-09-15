$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel({
    items: 3,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
  });

  var owl_gallery = $("#owl-gallery");

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

  var owl_gallery_single = $("#owl-gallery-single");

  owl_gallery_single.owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsMobile: false,
  });

  $(".next").click(function () {
    owl_gallery_single.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl_gallery_single.trigger("owl.prev");
  });

  // owl-demo-single-sm
  var owl_single_sm = $("#owl-demo-single-sm");

  owl_single_sm.owlCarousel({
    items: 1,
  });
});
