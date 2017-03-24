// Gallery using Ken Wheeler's Slick
// https://github.com/kenwheeler/slick
// ----------------------------------------------------

// var $gallery = $('.Gallery-items');
// var slideCount = null;
// 
// $( document ).ready(function() {
//     $gallery.slick({
//       touchThreshold: 10,
//       arrows: true,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       cssEase: 'ease-in-out',
//       dots: false,
//       fade: true,
//       infinite: true,
//       speed: 750,
//     });
// });


// Gallery with count
// https://codepen.io/selenacarmooshe/pen/LGmNRY
// multiple instances: https://codepen.io/ChaseMarcum/pen/jEPqww
// -------------------------------------------------------------

var $gallery = $('.js-gallery');
var $galleryWithCount = $('.js-galleryWithCount');
var slideCount = null;

// $( document ).ready(function() {
//     $galleryWithCount.slick({
//       arrows: true,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       cssEase: 'ease-in-out',
//       dots: false,
//       fade: true,
//       infinite: true,
//       speed: 750,
//       touchThreshold: 10,
//       appendArrows: $(".Gallery-arrows"),
//       prevArrow:"<button class='Gallery-arrow Gallery-arrow--prev -btn'><span class='icon icon--svg icon--arrow-left'><svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 11.6 20' xml:space='preserve'><polygon points='11.6 18.6 2.9 9.8 11.5 1.3 10 0 0 10 10.1 20'></polygon></svg></span></button>",
//       nextArrow:"<button class='Gallery-arrow Gallery-arrow--next -btn'><span class='icon icon--svg icon--arrow-left'><svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 11.6 20' xml:space='preserve'><polygon points='11.6 18.6 2.9 9.8 11.5 1.3 10 0 0 10 10.1 20'></polygon></svg></span></button>",
//     });
// });

$(document).ready(function () {
  
  var galleryInstance = $(".Gallery-items");
  
  galleryInstance.each(function() {
    if ($(this).is($galleryWithCount)) {
      $(this).slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        dots: false,
        fade: true,
        infinite: true,
        speed: 750,
        touchThreshold: 10,
        appendArrows: $(".Gallery-arrows"),
        prevArrow:"<button class='Gallery-arrow Gallery-arrow--prev -btn'><span class='icon icon--svg icon--arrow-left'><svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 11.6 20' xml:space='preserve'><polygon points='11.6 18.6 2.9 9.8 11.5 1.3 10 0 0 10 10.1 20'></polygon></svg></span></button>",
        nextArrow:"<button class='Gallery-arrow Gallery-arrow--next -btn'><span class='icon icon--svg icon--arrow-left'><svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 11.6 20' xml:space='preserve'><polygon points='11.6 18.6 2.9 9.8 11.5 1.3 10 0 0 10 10.1 20'></polygon></svg></span></button>",
      });
    } 
    else {
      $(this).slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        dots: false,
        fade: true,
        infinite: true,
        speed: 750,
        touchThreshold: 10,
      });
    }
  })
  
});

function setSlideCount() {
  var $el = $('.Gallery-footer').find('.js-GalleryTotalItems');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.Gallery-footer').find('.js-GalleryCurrentItem');
  $el.text(currentSlide + 1);
}

$galleryWithCount.on('init', function(event, slick) {
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$galleryWithCount.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  setCurrentSlideNumber(nextSlide);
});
