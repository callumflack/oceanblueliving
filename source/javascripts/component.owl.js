
// owl carousel config
// @reqs: owl.carousel.min.js
// @reqs: owl.carousel.css
// @url: http://www.owlcarousel.owlgraphic.com/docs/started-installation.html
// --------------------------------------------------------------------------

$(document).ready( function() {

	var owl = $('.js-owl');

	owl.owlCarousel({
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout: 4000,
		// autoWidth:true,
		items: 1,
		loop: true
		// smartSpeed: 1000
	});

	var owlDragger = $('.js-owl-dragger');

	owlDragger.owlCarousel({
		autoplay: true,
		autoplayTimeout: 4000,
		// autoWidth:true,
		items: 1,
		loop: true,
		responsive: false,
		smartSpeed: 1000
	});

});
