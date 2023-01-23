(function() {
  SliderThumbnails();
})();

function SliderThumbnails() {
  if (window.innerWidth >= 1025) {
    const slider = document.querySelector('slider-component [id^="Slider-Thumbnails"]');

    let isDown = false;
    let startY;
    let scrollTop;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startY = e.pageY - slider.offsetTop;
      scrollTop = slider.scrollTop;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const y = e.pageY - slider.offsetTop;
      const walk = (y - startY) * 3;
      slider.scrollTop = scrollTop - walk;
    });

  }
}
