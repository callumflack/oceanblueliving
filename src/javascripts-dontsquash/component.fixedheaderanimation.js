
// Navbar Scroll Event
// See: http://codepen.io/Craig-Watson/pen/zGbNRL
// --------------------------------------------------------------------------

$(document).ready( function() {

	var lastScrollTop = 0;
	var navToggle     = $('.Nav-toggle');
	var navTransition = "Nav-toggle--transition";

	$(window).scroll(function(event) {
		var st = $(this).scrollTop();

		if (st > 400 && st > lastScrollTop){
			navToggle.addClass(navTransition);
		} else {
			navToggle.removeClass(navTransition);
		}

		lastScrollTop = st;

	});

});
