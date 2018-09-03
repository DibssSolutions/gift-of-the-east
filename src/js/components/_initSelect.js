import selectpicker from 'bootstrap-select';
import 'bootstrap/js/dist/dropdown';
import 'popper.js';
import { DOC, BODY } from '../constants';

DOC.ready(() => {
  const select = $('.js-select');
  select
    .selectpicker({
      selectAllText: 'Все',
      deselectAllText: 'Сбросить',
      noneSelectedText: 'Не выбрано'
    })
    .on('changed.bs.select', function(e, clickedIndex, isSelected, previousValue) {
      const that = $(this);
      const parent = that.parents('.js-select');
      const select = parent.find('select');
      const selectedText = select.data('actions-selected-all-text');
      const btnSeletAll = parent.find('.bs-select-all');
      const deSelectedText = select.data('actions-deselected-all-text');
      let selectedItem = parent.find('[aria-selected="true"]').length;
      if (selectedItem > 0) {
      	btnSeletAll.text(`${selectedText} ${selectedItem}`);
      	btnSeletAll.prop('disabled', 'disabled');
      }
      else {
      	btnSeletAll.text(`${deSelectedText}`);
      	btnSeletAll.prop('disabled', '');
      }
    });
  BODY.find('.js-select .btn').removeClass('btn');
});

