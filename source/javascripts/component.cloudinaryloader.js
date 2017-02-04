
// Cloudinary loader
// https://jsfiddle.net/idobarnoam/k89ff3ay/1/

$(function () {
	
	console.log("placeholder,small");  
	
	var placeholder = document.querySelector('.js-cloudinary');
    var small = placeholder.querySelector('.xs');
    // var large = placeholder.querySelector('.lg');
			
	console.log(placeholder,small);
  
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
        setTimeout(function() {
            small.classList.add('is-loaded');
        }, 1000);
    };

});