
// Cloudinary loader
// https://jsfiddle.net/idobarnoam/k89ff3ay/1/

$(function () {
	
	console.log("placeholder,small");  
	
	var imageWrapper = document.querySelector('.js-cloudinary');
    var placeholderImage = imageWrapper.querySelector('.xs');
    var highresImage = imageWrapper.querySelector('.lg');
			
	console.log(imageWrapper,placeholderImage);
  
	// 1: load small image and show it
	// var img = new Image();
	// img.src = small.src;
	// img.onload = function () {
	// 	small.classList.add('is-loaded');
	// };

	// // 2: load large image
	// var imgLarge = new Image();
	// imgLarge.src = placeholder.dataset.bg; 
	// imgLarge.onload = function () {
	// 	imgLarge.classList.add('CloudinaryImage', 'is-loaded');
	// };
	// placeholder.appendChild(imgLarge);
	
    // 3: show large image on timeout
    window.onload = function() {
        // placeholderImage.classList.add('is-loaded');
        
        setTimeout(function() {
            highresImage.classList.add('is-loaded');
        }, 1000);
    };

});