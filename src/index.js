import './main.scss';
import SiemaWithDots from './modules/SiemaWithDots'


// DOM 
window.addEventListener('DOMContentLoaded', () => {

	let mainSlider = new SiemaWithDots({
	  selector: '.gallery-slider__slides',
	  duration: 350,
	  easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    dotsBefore: false,
	  draggable: true,
	  loop: true,
	  onInit: function() {
	  	this.addDots();
      this.updateDots();
	  },
	  onChange: function() {
	  	this.updateDots();
	  },
	});

	let sliderImages = Array.prototype.slice.call(document.querySelectorAll('.gallery-slider__image'));

	sliderImages.forEach( image => {
		image.addEventListener('mousemove', event => {
	    const r = image.getBoundingClientRect()
	    image.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
	    image.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
		});
	});

});