import { qs, qsAll, iterator } from '../helpers/utility.js';
import { SORT_BY_HIGH_PRICE } from '../constants/strings.js';
import store from '../store/index.js';
export default class Modal {
  constructor() {
    this.SORT_MODAL_CONTAINER = 'sort-modal';
    this.FILTER_MODAL_CONTAINER = 'filter-modal';
    this.MODAL_CONTAINER = '.js-modal-container';
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
      setSortDefaults(sortElements, sortby);
      document.getElementById(self.SORT_MODAL_CONTAINER).classList.remove('modal');
      qs(self.MODAL_CONTAINER).style = 'display:none';
    });

    qs(self.SORT_APPLY).addEventListener('click', function() {
      store.dispatch('sort', qs('input[name="sortby"]:checked').value);
      document.getElementById(self.SORT_MODAL_CONTAINER).classList.remove('modal');
      qs(self.MODAL_CONTAINER).style = 'display:none';
    });

    iterator(
      qsAll(self.SORT_OPTIONS),
      () => {
        store.dispatch('sort', qs('input[name="sortby"]:checked').value);
      },
      'click'
    );
  }
}
