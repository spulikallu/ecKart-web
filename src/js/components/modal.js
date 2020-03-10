import { qs, qsAll, iterator } from '../helpers/utility.js';
import { SORT_BY_HIGH_PRICE } from '../constants/strings.js';
import store from '../store/index.js';
export default class Modal {
  constructor() {
    this.SORT_MODAL_CONTAINER = 'sort-modal';
    this.SORT_CANCEL = '#sort-modal .js-modal-cancel';
    this.SORT_APPLY = '#sort-modal .js-modal-apply';
    this.SORT_OPTIONS = 'input[name="sortby"]';
  }

  init() {
    let self = this;
    let sortElements = qsAll(this.SORT_OPTIONS);
    let sortby = SORT_BY_HIGH_PRICE;

    let setSortDefaults = function(sortElements, sortby) {
      sortElements.forEach(element => {
        if (element.value == sortby) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      });
    };
    setSortDefaults(sortElements, sortby);

    qs(self.SORT_CANCEL).addEventListener('click', function() {
      setSortDefaults(sortElements, store.state.sortby);
      store.dispatch('sort', qs('input[name="sortby"]:checked').value);
      document.getElementById(self.SORT_MODAL_CONTAINER).style = 'display:none';
    });

    qs(self.SORT_APPLY).addEventListener('click', function() {
      store.dispatch('sort', qs('input[name="sortby"]:checked').value);
      document.getElementById(self.SORT_MODAL_CONTAINER).style = 'display:none';
    });

    iterator(
      qsAll(self.SORT_OPTIONS),
      () => {
        if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768) {
          let sortby = qs('input[name="sortby"]:checked').value;
          qs('label[name="priceHigh"]').classList.remove('active');
          qs('label[name="priceLow"]').classList.remove('active');
          qs('label[name="discount"]').classList.remove('active');
          qs('label[name="' + sortby + '"]').classList.add('active');
          store.dispatch('sort', sortby);
        }
      },
      'click'
    );
  }
}
