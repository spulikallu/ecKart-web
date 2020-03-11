import { qs, qsAll, iterator } from '../helpers/utility.js';
import Component from '../core/component.js';
import store from '../store/index.js';

export default class Sort extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-sort-component')
    });

    this.SORT_BTN = '.js-sort';
    this.SORT_MODAL_CONTAINER = 'sort-modal';
    this.SORT_CANCEL = '#sort-modal .js-modal-cancel';
    this.SORT_APPLY = '#sort-modal .js-modal-apply';
    this.SORT_OPTIONS = 'input[name="sortby"]';
  }

  init() {
    let self = this;
    let sortElements = qsAll(this.SORT_OPTIONS);

    let setSortLinks = function(sortby) {
      qs('label[name="priceHigh"]').classList.remove('active');
      qs('label[name="priceLow"]').classList.remove('active');
      qs('label[name="discount"]').classList.remove('active');
      qs('label[name="' + sortby + '"]').classList.add('active');
      store.dispatch('sort', sortby);
    };

    let setSortDefaults = function(sortElements, sortby) {
      sortElements.forEach(element => {
        if (element.value == sortby) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      });
    };

    qs(self.SORT_CANCEL).addEventListener('click', function() {
      setSortDefaults(sortElements, store.state.sortby);

      store.dispatch('sort', qs('input[name="sortby"]:checked').value);
      setSortLinks(store.state.sortby);
      document.getElementById(self.SORT_MODAL_CONTAINER).style = 'display:none';
    });

    qs(self.SORT_APPLY).addEventListener('click', function() {
      store.dispatch('sort', qs('input[name="sortby"]:checked').value);
      setSortLinks(store.state.sortby);
      document.getElementById(self.SORT_MODAL_CONTAINER).style = 'display:none';
    });

    iterator(
      qsAll(self.SORT_OPTIONS),
      () => {
        if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768) {
          let sortby = qs('input[name="sortby"]:checked').value;
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
      let modalContainer = document.getElementById(this.SORT_MODAL_CONTAINER);
      if (!modalContainer.classList.contains('helper-modal')) {
        document.getElementById(this.SORT_MODAL_CONTAINER).classList.add('helper-modal');
      }

      document.getElementById(this.SORT_MODAL_CONTAINER).style = 'display:block';
    });
  }
}
