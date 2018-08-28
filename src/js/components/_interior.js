import { LOAD_DATA, buildIcon } from './../utils';
import { ACTIVE } from './../constants';
const buttons = $('.js-interior-trigger');
const popupClose = $('.js-interior-popup-close');

const template = data => {
  let tamplate = `
    <div class="interior__product product">
      <div class="product__img">
        <img src="${data.current.img}" alt="${data.current.imgAlt}">
      </div>
      <div class="product__wrap">
        <div class="product__name">${data.current.name}</div>
        <div class="product__price">${data.current.price}</div>
        <div class="product__footer">
          <button type="button" class="product__btn btn js-add-to-basket">${buildIcon('shopping-bag')}${data.current.btnText}</button>
          <button type="button" class="product__like btn-like js-add-like">${buildIcon('heart-outline')}</button>
        </div>
      </div>
    </div>`;
  if (data.similar) {
    tamplate += `<div class="title-sm">${data.similar.title}</div>`;
    for (let i = 0; i <= data.similar.list.length - 1; i++) {
      console.log(tamplate);
      tamplate += ` 
      <div class="interior__product product">
        <div class="product__img">
          <img src="${data.similar.list[i].img}" alt="${data.current.imgAlt}">
        </div>
        <div class="product__wrap">
          <div class="product__name">${data.similar.list[i].name}</div>
          <div class="product__price">${data.similar.list[i].price}</div>
          <div class="product__footer">
            <button type="button" class="product__btn btn js-add-to-basket">${buildIcon('shopping-bag')}${data.similar.list[i].btnText}</button>
            <button type="button" class="product__like btn-like js-add-like">${buildIcon('heart-outline')}</button>
          </div>
        </div>
      </div>
      `;
    }
  }
  return tamplate;
};


buttons.each((i,el) => {
  let that = $(el);
  const popupWrap = that.parent('.js-interior').find('.js-interior-popup-wrap');
  let path = that.data('json');
  LOAD_DATA({
    path: path,
    callback: data => { 
      that.on('click', () => {
        buttons.removeClass(ACTIVE);
        that.addClass(ACTIVE);
        popupWrap.html(template(data));
      } );
      
    }
  });
});
popupClose.on('click', () => {buttons.removeClass(ACTIVE);});
