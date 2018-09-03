import slick from 'slick-carousel';
import { INIT, widthMD, widthSM } from '../constants';

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

 
$('.js-slider-products').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.js-slider-products-nav'
});
$('.js-slider-products-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.js-slider-products',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
