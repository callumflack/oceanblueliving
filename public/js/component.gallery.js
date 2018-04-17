(function($) {
  // Based on OUI's dropdown.js
  // See also Todd Motto's data attribute manipulations: https://goo.gl/dFE49n
  // Basics: http://stackoverflow.com/questions/2937227/what-does-function-jquery-mean
  // Link two data-modal-toggle and data-modal elements by setting the same data-modal-id value on both
  // Show the modal in the DOM
  $(document).on("click", "[data-modal-toggle]", function(e) {
    e.stopPropagation();
    var id = e.currentTarget.getAttribute("data-modal-id");
    var src = e.currentTarget.getAttribute("data-src");
    var MODAL = "[data-modal-id=" + id + "]",
      ACTIVE_CLASS = "is-active";
    // If the modal is for a gallery set the image src
    if (id.toLowerCase() === "gallery" && src) {
      $(MODAL + " img")[0].setAttribute("src", src);
    }
    $(MODAL).toggleClass(ACTIVE_CLASS);
    // Clicking anywhere outside the modal nav closes the modal.
    // Only attaches if a modal has been triggered.
    $(document).bind("click.modalNav", function() {
      var MODAL = "[data-modal]",
        ACTIVE_CLASS = "is-active";
      // If a modal is visible, close it.
      if ($(MODAL).hasClass(ACTIVE_CLASS)) {
        $(MODAL).removeClass(ACTIVE_CLASS);
      }
      $(document).unbind("click.modalNav");
    });
  });
})(jQuery);
