import slick from 'slick-carousel';

import {
  BODY,
  DOC,
  WIN,
  INIT,
  widthMD,
  widthSM,
  PAUSED,
  FULLSCREEN,
  WIN_WIDTH
} from '../constants';
import { buildIcon } from '../utils';
import { initSliderButtonsEvents } from './_photo-gallery';

const mainSlider = $('.js-main-slider');

mainSlider.each((i, el) => {
  let slider = $(el);
  let sliderParent = slider.parents('.js-main-slider-wrap');
  let prevBtn = $('.js-main-slider-prev', sliderParent);
  let nextBtn = $('.js-main-slider-next', sliderParent);
  slider.on('init', () => {
    sliderParent.addClass(INIT);
  });
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
slider.each((i, el) => {
  let slider = $(el);
  let sliderParent = slider.parents('.js-slider-parent');
  let prevBtn = $('.js-slider-prev', sliderParent);
  let nextBtn = $('.js-slider-next', sliderParent);
  slider.on('init', () => {
    sliderParent.addClass(INIT);
  });
  slider.slick({
    dots: true,
    infinite: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
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
sliderWrap.each((i, el) => {
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
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: widthMD,
        settings: {
          vertical: false,
          variableWidth: true
        }
      },
      {
        breakpoint: widthSM,
        settings: {
          variableWidth: true,
          vertical: false
        }
      }
    ]
  });
});

const sliderWatched = $('.js-slider-watched');

sliderWatched.slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: `<button class="slider-watched__prev" type="button">${buildIcon(
    'arrow-left'
  )}</button>`,
  nextArrow: `<button class="slider-watched__next" type="button">${buildIcon(
    'arrow-right'
  )}</button>`,
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

const magazineSlider = $('.js-magazine-slider');
magazineSlider.each((i, el) => {
  let slider = $(el);
  let sliderParent = slider.parents('.js-magazine-slider-parent');
  let prevBtn = $('.js-magazine-slider-prev', sliderParent);
  let nextBtn = $('.js-magazine-slider-next', sliderParent);
  slider.on('init', () => {
    sliderParent.addClass(INIT);
  });
  slider.slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: prevBtn,
    nextArrow: nextBtn,
    customPaging: (slider, pageIndex) => {
      return $(`<button class="magazine-slider__dot">
    <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle stroke="#000" stroke-width="2" cx="11" cy="11" r="10"></circle>
      </g>
    </svg>
    </button>`);
    }
  });
});

DOC.ready(() => {
  let timeOut;
  let arrayHref = [];
  const sliderIcons = $('.slick-slider .icon use');
  sliderIcons.each((i, el) => {
    const atr = $(el).attr('xlink:href');
    arrayHref.push(atr);
  });
  WIN.on('resize', () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      for (let i = 0; i <= sliderIcons.length - 1; i++) {
        $(sliderIcons[i]).attr('xlink:href', `${arrayHref[i]}`);
      }
    }, 100);
  });
});

// ============== OFFERS SLIDER ====================
DOC.ready(() => {
  const productSlider = $('.js-offers-slider');

  productSlider.each((i, el) => {
    let slider = $(el);

    slider.on('init', () => {
      slider.addClass(INIT);
      const video = $('video', slider)[0];
      video.play();
      initControls();
    });

    slider.on('afterChange', (event, slick, currentSlide) => {
      // PAUSE ALL VIDEOS
      if (WIN_WIDTH > widthMD) {
        const videos = $('.offers-slider__slide video');
        videos.each((i, el) => {
          $(el)[0].pause();
        });
        // PLAY CURRENT
        let slides = $('.offers-slider__slide');
        const videoCurrent = $(slides[currentSlide]).find('video')[0];
        if (videoCurrent) {
          $(video).removeClass(PAUSED);
          videoCurrent.play();
        }
      }
    });

    slider.slick({
      dots: true,
      infinite: false,
      speed: 1800,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      prevArrow: `<button class="offers-slider__prev js-slider-prev">${buildIcon(
        'arrow-left'
      )}</button>`,
      nextArrow: `<button class="offers-slider__next js-slider-next">${buildIcon(
        'arrow-right'
      )}</button>`,
      customPaging: (slider, pageIndex) => {
        return $(`<button class="offers-slider__dot">
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
            arrows: false,
            fade: false
          }
        }
      ]
    });

    const video = $('.js-video');
    video.each((i, el) => {
      if(el.paused) $(el).addClass(PAUSED);
    });
  });
});

function initControls() {
  const playBtn = $('.js-video-play');
  const pauseBtn = $('.js-video-pause');
  const expandBtn = $('.js-video-expand');
  const compressBtn = $('.js-video-compress');
  const slider = playBtn.closest('.js-offers-slider');

  expandBtn.each((i, el) =>
    $(el).on('click', function(e) {
      slider.addClass(FULLSCREEN);
      const video = $(this)
        .closest('.package-offer__video-wrapper')
        .find('video')[0];
      $(video).prop('muted', false);
    })
  );

  compressBtn.each((i, el) =>
    $(el).on('click', function(e) {
      slider.removeClass(FULLSCREEN);
      const video = $(this)
        .closest('.package-offer__video-wrapper')
        .find('video')[0];
      $(video).prop('muted', true);
    })
  );

  pauseBtn.on('click', function(e) {
    const video = $(this)
      .closest('.package-offer__video-wrapper')
      .find('video')[0];
    video.pause();
    $(video).addClass(PAUSED);
  });

  playBtn.on('click', function(e) {
    const video = $(this)
      .closest('.package-offer__video-wrapper')
      .find('video')[0];
    video.play();
    $(video).removeClass(PAUSED);
  });
}

// =================== GALLERY SLIDER ============================

DOC.ready(() => {
  const gallerySlider = $('.js-gallery-slider');

  gallerySlider.each((i, el) => {
    let slider = $(el);

    slider.on('init', () => {
      slider.addClass(INIT);
      initSliderButtonsEvents();
    });

    slider.slick({
      dots: false,
      infinite: false,
      speed: 1800,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      prevArrow: `<button class="shops-slider__prev shops-btn shops-btn_arrow">${buildIcon(
        'arrow-left'
      )}</button>`,
      nextArrow: `<button class="shops-slider__next shops-btn shops-btn_arrow">${buildIcon(
        'arrow-right'
      )}</button>`,

      responsive: [
        {
          breakpoint: widthMD,
          settings: {
            arrows: false,
            fade: false
          }
        }
      ]
    });
  });
});
