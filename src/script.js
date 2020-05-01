const getDimensions = () => {
  document.querySelector('#screen-width').textContent = screen.width;
  document.querySelector('#screen-height').textContent = screen.height;

  document.querySelector('#window-width').textContent = window.outerWidth;
  document.querySelector('#window-height').textContent = window.outerHeight;

  document.querySelector('#inner-width').textContent = window.innerWidth;
  document.querySelector('#inner-height').textContent = window.innerHeight;
}

getDimensions();

window.addEventListener('resize', getDimensions);