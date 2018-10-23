export default class Sequence {
  constructor(options) {
    this._canvas = options.canvas;
    this._canvas.width = options.width;
    this._canvas.height = options.height;

    this._context = this._canvas.getContext('2d');

    this._imageSrc = options.imageSrc;
    this._frameId = 0;

    this._images = [];
    this._spriteWidth = [];
    this._numberOfFrames = [];
    this._frameIndex = 0;
    this._tickCount = 0;
    this._ticksPerFrame = options.ticksPerFrame || 0;
    this._frame;
    this._frameReverse;
    this._couter = 0;
    this.onComplete = options.onComplete;
    this.init();
  }
  createImagesArray() {
    for (var i = 0; i <= this._imageSrc.length - 1; i++) {
      this._images.push(new Image());
      this._images[i].src = this._imageSrc[i];
    }
  }
  setImagesStyle() {
    for (var i = 0; i <= this._imageSrc.length - 1; i++) {
      this._spriteWidth.push(this._images[i].width);
      this._numberOfFrames.push(this._images[i].width / this._canvas.width);
    }
    this._spriteHeight = this._images[0].height;
  }

  update() {
    this._tickCount += 1;
    if (this._tickCount > this._ticksPerFrame) {
      this._tickCount = 0;
      // If the current frame index is in range
      if (this._frameIndex < this._numberOfFrames[this._frameId] - 1) {
        // Go to the next frame
        this._frameIndex += 1;
      } else if (
        !(this._frameId >= this._images.length - 1) &&
        this._frameIndex === this._numberOfFrames[this._frameId] - 1
      ) {
        this._frameId += 1;
        this._frameIndex = 0;
      }
    }
  }

  // reverseUpdate() {
  // 	this._tickCount += 1;
  // 	if (this._tickCount >= this._ticksPerFrame) {
  // 		this._tickCount = 0;
  // 		// If the current frame index is in range
  // 		if (0 < this._frameIndex) {
  // 			// Go to the next frame
  // 			this._frameIndex -= 1;
  // 		} else {
  // 			cancelAnimationFrame(this._frame);
  // 		}
  // 	}
  // }
  // reverse() {
  // 	this._frameReverse = requestAnimationFrame(()=>{
  // 		this.reverseUpdate();
  // 		this.render();
  // 		this.reverse();
  // 	});
  // }

  render() {
    // Clear the canvas
    this._context.clearRect(
      0,
      0,
      this._spriteWidth[this._frameId],
      this._spriteHeight
    );
    // Draw the animation
    this._context.drawImage(
      this._images[this._frameId],
      (this._frameIndex * this._spriteWidth[this._frameId]) /
        this._numberOfFrames[this._frameId],
      0,
      this._spriteWidth[this._frameId] / this._numberOfFrames[this._frameId],
      this._spriteHeight,
      0,
      0,
      this._spriteWidth[this._frameId] / this._numberOfFrames[this._frameId],
      this._spriteHeight
    );
  }

  play() {
    this._frame = requestAnimationFrame(() => {
      this.update();
      this.render();
      this.play();
      if (
        this._frameId >= this._images.length - 1 &&
        this._frameIndex === this._numberOfFrames[this._frameId] - 1
      ) {
        this.stop();
      }
    });
  }

  stop(func) {
    cancelAnimationFrame(this._frame);
    if (typeof this.onComplete != 'function') return;
    this.onComplete();
  }

  init() {
    this.createImagesArray();
    this._images.forEach((img, i) => {
      img.addEventListener('load', () => {
        this._couter += 1;
        if (this._couter < this._images.length) return;
        this.setImagesStyle();
        this.update();
        this.render();
      });
    });
  }
}

const sequence = new Sequence({
  canvas: document.querySelector('.js-canvas-1'),
  width: 1920,
  height: 1080,
  imageSrc: [
    'img/s_1.png',
    'img/s_2.png',
    'img/s_3.png',
    'img/s_4.png'
  ],
  ticksPerFrame: 3,
  onComplete: () => {
    sequence2.play();
    $('canvas').removeClass('is-active');
    $('.js-canvas-2').addClass('is-active');
  }
});

setTimeout(() => {
  sequence.play();
}, 2000);

const sequence2 = new Sequence({
  canvas: document.querySelector('.js-canvas-2'),
  width: 1920,
  height: 1080,
  imageSrc: ['img/s_5.png', 'img/s_6.png', 'img/s_7.png'],
  ticksPerFrame: 3,
  onComplete: () => {
    sequence3.play();
    $('canvas').removeClass('is-active');
    $('.js-canvas-3').addClass('is-active');
  }
});

const sequence3 = new Sequence({
  canvas: document.querySelector('.js-canvas-3'),
  width: 1920,
  height: 1080,
  imageSrc: ['img/s_8.png', 'img/s_9.png', 'img/s_10.png'],
  ticksPerFrame: 3,
  onComplete: () => {
    console.log('canvas!');
  }
});
