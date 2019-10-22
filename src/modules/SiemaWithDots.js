import Siema from 'siema';

class SiemaWithDots extends Siema {

  addDots() {
    // create a contnier for all dots
    // add a class 'dots' for styling reason
    this.dots = document.createElement('div');
    this.dots.classList.add('dots');

    if(this.config.dotsClass) {
      this.dots.classList.add(this.config.dotsClass);
    }

    // loop through slides to create a number of dots
    for (let i = 0; i < this.innerElements.length; i++) {
      // create a dot
      const dot = document.createElement('button');

      // add a class to dot
      dot.classList.add('dots__item');

      // add an event handler to each of them
      dot.addEventListener('click', () => {
        this.goTo(i);
      })

      // append dot to a container for all of them
      this.dots.appendChild(dot);
    }

    // add the container full of dots after selector
    if(this.config.dotsBefore === false) {
      this.selector.insertAdjacentElement('afterend', this.dots);
    } else {
      this.selector.insertAdjacentElement('beforebegin', this.dots);
    }
  }

  removeDots() {
    this.dots.parentNode.removeChild(this.dots);
  }

  logDotsHistory() {
    if(this.dotsHistory === undefined) {
      this.dotsHistory = [];
    }
    this.dotsHistory.push(this.currentSlide);
    if(this.dotsHistory.length === 3) {
      this.dotsHistory.shift();
    }
  }

  get dotPrevious() {
    if(this.dotsHistory.length >= 2) {
      return this.dotsHistory[0];
    } else {
      return false;
    }
  }

  updateDots() {
    this.logDotsHistory();

    const dotsItems = this.dots.querySelectorAll('button');
    for (let i = 0; i < dotsItems.length; i++) {
      // if current dot matches currentSlide prop, add a class to it, remove otherwise
      const addOrRemoveActive = this.currentSlide === i ? 'add' : 'remove';
      dotsItems[i].classList[addOrRemoveActive]('dots__item--active');
      // if current dot matches previous, add a class to it, remove otherwise
      const addOrRemovePrevious = this.dotPrevious === i ? 'add' : 'remove';
      dotsItems[i].classList[addOrRemovePrevious]('dots__item--previous');
    }
  }
}

export default SiemaWithDots;