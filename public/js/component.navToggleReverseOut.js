// http://jsfiddle.net/4zw0cjsu/

jQuery(function($) {

    var $navToggle = $(".js-navToggle");
    var $win        = $(window);
    var winH        = $win.height(); // Get the window height.

    $win.on("scroll", function () {
      if ($(this).scrollTop() > winH ) {
        $navToggle.removeClass("is-reversedOut");
        console.log("Nav toggles at: " + winH);
      } else {
        $navToggle.addClass("is-reversedOut");
        console.log("Nav toggle is white");
      }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });
    
    // $(function() {
    // //caches a jQuery object containing the header element
    // var header = $(".clearHeader");
    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    // 
    //     if (scroll >= 500) {
    //         header.removeClass('clearHeader').addClass("darkHeader");
    //     } else {
    //         header.removeClass("darkHeader").addClass('clearHeader');
    //     }
    // });

});
