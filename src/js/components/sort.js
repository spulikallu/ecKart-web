import { qs, qsAll, iterator, getViewPortWidth } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';

export default class Sort extends Component {
  constructor() {
    super({
      store,
      element: qs('.js-sort-component')
    });

    this.SORT_BTN = '.js-sort';
    this.SORT_MODAL_CONTAINER = '#sort-modal';
    this.SORT_CANCEL = '#sort-modal .js-modal-cancel';
    this.SORT_APPLY = '#sort-modal .js-modal-apply';
    this.SORT_OPTIONS = 'input[name="sortby"]';
    this.SORT_LABELS = '#sort-modal label';
    this.ACTIVE = 'active';
    this.SORT_OPTION_SELECTED = 'input[name="sortby"]:checked';
    this.HELPER_MODAL = 'helper-modal';
  }

  init() {
    let self = this;

    let setSortLinks = function(sortby) {
      iterator(qsAll(self.SORT_LABELS), item => {
        item.classList.remove(self.ACTIVE);
      });

      qs('label[name="' + sortby + '"]').classList.add(self.ACTIVE);
      store.dispatch('sort', sortby);
    };

    self.setSortDefaults = function(sortElements, sortby) {
      sortElements.forEach(element => {
        if (element.value == sortby) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      });
    };

    qs(self.SORT_CANCEL).addEventListener('click', function() {
      store.dispatch('sort', qs(self.SORT_OPTION_SELECTED).value);
      setSortLinks(store.state.sortby);
      qs(self.SORT_MODAL_CONTAINER).style = 'display:none';
    });

    qs(self.SORT_APPLY).addEventListener('click', function() {
      store.dispatch('sort', qs(self.SORT_OPTION_SELECTED).value);
      setSortLinks(store.state.sortby);
      qs(self.SORT_MODAL_CONTAINER).style = 'display:none';
    });

    iterator(
      qsAll(self.SORT_OPTIONS),
      () => {
        if (getViewPortWidth() > 768) {
          let sortby = qs(self.SORT_OPTION_SELECTED).value;
          setSortLinks(sortby);
        }
      },
      'click'
    );
  }

  render() {
    let self = this;

    self.element.innerHTML = `
      <a href="javaScript:void(0)" class="js-sort">
      <i class="fas fa-sort"><span>Sort</span></Sort></i></a>
    `;

    qs(this.SORT_BTN).addEventListener('click', () => {
      self.setSortDefaults(qsAll(this.SORT_OPTIONS), store.state.sortby);
      let modalContainer = qs(this.SORT_MODAL_CONTAINER);
      if (!modalContainer.classList.contains(self.HELPER_MODAL)) {
        modalContainer.classList.add(self.HELPER_MODAL);
      }
      modalContainer.style = 'display:block';
    });
  }
}
