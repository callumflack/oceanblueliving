// https://codepen.io/geelen/pen/RGvQyJ
// g_auto or g_center

(() => {
  const baseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";

  Array.from(document.querySelectorAll("[data-bg]")).forEach(image => {
    console.log(image.clientWidth);

    const { clientWidth, clientHeight } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageParams = `w_${100 *
      Math.round(clientWidth * pixelRatio / 100)},h_${100 *
      Math.round(clientHeight * pixelRatio / 100)},c_fill,g_center,f_auto`;
    const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`;

    image.style.backgroundImage = `url('${url}')`;
    // image.src = url
  });

  // https://jsfiddle.net/idobarnoam/k89ff3ay/1/
  Array.from(document.querySelectorAll(".js-cloudinaryImage")).forEach(
    image => {
      // image.addEventListener('load', () => {
      //     image.classList.add('is-loaded')
      // })
      // hack for bg images
      setTimeout(function() {
        image.classList.add("is-loaded");
      }, 1500);
    }
  );
})();
