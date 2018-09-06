import slick from 'slick-carousel';
import { BODY, DOC, WIN, INIT, widthMD, widthSM } from '../constants';
import { buildIcon } from '../utils';

const mainSlider = $('.js-main-slider');

mainSlider.each((i,el) => {
  let slider = $(el);
  let sliderParent = slider.parents('.js-main-slider-wrap');
  let prevBtn = $('.js-main-slider-prev', sliderParent);
  let nextBtn = $('.js-main-slider-next', sliderParent);
  slider.on('init', () => { sliderParent.addClass(INIT); });
  slider.slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: prevBtn,
    nextArrow: nextBtn,
    customPaging: (slider, pageIndex) => {
      return $(`<button class="main-slider__dot">
		<svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<circle stroke="#000" stroke-width="2" cx="17" cy="17" r="16"></circle>
			</g>
		</svg>
		</button>`);
    }
  });
});

const slider = $('.js-slider');
slider.each((i,el) => {
  let slider = $(el);
  let sliderParent = slider.parents('.js-slider-parent');
  let prevBtn = $('.js-slider-prev', sliderParent);
  let nextBtn = $('.js-slider-next', sliderParent);
  slider.on('init', () => { sliderParent.addClass(INIT); });
  slider.slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: prevBtn,
    nextArrow: nextBtn,
    customPaging: (slider, pageIndex) => {
      return $(`<button class="slider__dot">
    <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle stroke="#000" stroke-width="2" cx="17" cy="17" r="16"></circle>
      </g>
    </svg>
    </button>`);
    },
    responsive: [
      {
        breakpoint: widthMD,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: widthSM,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

const sliderWrap = $('.js-slider-wrap');
sliderWrap.each((i,el) => {
  let that = $(el);
  let sliderProducts = that.find('.js-slider-products');
  let sliderNav = that.find('.js-slider-products-nav');
  sliderProducts.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: sliderNav
  });

  sliderNav.slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: sliderProducts,
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

});



const sliderWatched = $('.js-slider-watched');

sliderWatched.slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: `<button class="slider-watched__prev">${buildIcon('arrow-left')}</button>`,
  nextArrow: `<button class="slider-watched__next">${buildIcon('arrow-right')}</button>`,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

DOC.ready(() => {
  let timeOut;
  let arrayHref = [];
  const sliderIcons = $('.js-slider-watched .icon');
  sliderIcons.each((i,el) => {
    const container = $(el);
    const atr = container.find('use').attr('xlink:href');
    arrayHref.push(atr);
    // console.log(arrayHref);
  });
  WIN.on('resize', () => {
  // setTimeout(() => {
    // console.log(sliderIcons);
    for(let i = 0; i <= sliderIcons.length-1; i++) {
      $(sliderIcons[i]).find('use').attr('xlink:href', ''); 
      // $(sliderIcons[i]).attr('xlink:href', arrayHref[i]); 
      // $(sliderIcons[i]).find('use').attr('xlink:href', ''); 
      console.log('atr', $(sliderIcons[i]).find('use').attr('xlink:href'));
    }
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      // sliderIcons 
      for(let i = 0; i <= sliderIcons.length-1; i++) {
        // $(sliderIcons[i]).find('use').attr('xlink:href', ''); 
        $(sliderIcons[i]).attr('xlink:href', `${arrayHref[i]}`); 
        // $(sliderIcons[i]).find('use').attr('xlink:href', ''); 
        console.log('atr2', $(sliderIcons[i]).find('use').attr('xlink:href'), arrayHref[i]);
      }
      // container.find('use').attr('xlink:href', ''); 
      // container.find('use').attr('xlink:href', atr); 
      // console.log(atr);
    },500);
  });

  // },500);
});
