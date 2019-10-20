import './main.scss';
import Siema from 'siema';


// Box
class Box {
	constructor(id, color) {
		this._color = color;
		this._id = id;
		// Create element
		let element = document.createElement('div');
		element.classList.add('box', `box--${this.color}`);
		element.id = `box-${this._id}`;
		this.element = element;
	}

	get color() {
		return this._color;
	}

	set color(newColor) {
		this.element.classList.remove(`box--${this._color}`);
		this.element.classList.add(`box--${newColor}`);
	}

	_updateColor(color) {
		const element = document.createElement('div');
		element.classList.add(`box--${this.color}`);
		element.id = `box-${this.id}`;
	}
}

// Helpers
function canBeDividedBy(num) {
	if(typeof this !== 'number') {
		throw 'Value has to be number';
	}
	return this % num === 0; 
}

function makerBoxesMapper(num, transform = b => { return b }) {
	let results = [];
	for (let i = 1; i <= num; i++) {
		results.push(transform(i, new Box(i, 'vege')));
	}
	return results;
}


// DOM 
window.addEventListener('DOMContentLoaded', () => {

	// Create boxes
	let boxes = makerBoxesMapper(15, (index, box) => {
		if(canBeDividedBy.call(index, 3)) {
			box.color = 'royal';
		}
		return box;
	});

	let mainSlider = new Siema({
	  selector: '.gallery-slider',
	  duration: 200,
	  easing: 'ease-out',
	  perPage: 3,
	  startIndex: 0,
	  draggable: true,
	  loop: true,
	  rtl: false,
	  onInit: () => {},
	  onChange: () => {},
	});

});