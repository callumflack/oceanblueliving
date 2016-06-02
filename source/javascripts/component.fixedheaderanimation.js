
// Navbar Scroll Event
// See: http://codepen.io/Craig-Watson/pen/zGbNRL
// --------------------------------------------------------------------------

$(document).ready( function() {

	var lastScrollTop = 0;
	var navbar        = $('.Nav');

	$(window).scroll(function(event) {
		var st = $(this).scrollTop();

		if (st > 300 && st > lastScrollTop){
			navbar.addClass('Nav-transition');
		} else {
			navbar.removeClass('Nav-transition');
		}

		lastScrollTop = st;

	});

});
