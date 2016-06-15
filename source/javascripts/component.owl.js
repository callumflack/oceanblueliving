
// owl carousel config
// @reqs: owl.carousel.min.js
// @reqs: owl.carousel.css
// @url: http://www.owlcarousel.owlgraphic.com/docs/started-installation.html
// --------------------------------------------------------------------------

$(document).ready( function() {

	var owl = $('.owl-carousel');

	owl.owlCarousel({
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout: 5000,
		// autoWidth:true,
		items: 1,
		loop: true,
		smartSpeed: 1000
	});

});
