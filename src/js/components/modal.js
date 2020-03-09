import store from '../store/index.js';
export default class Modal {
  init() {
    let modal = document.getElementById('app-modal');
    let sortElement = document.querySelectorAll('input[name="sortby"]');
    let sortby = document.querySelector('input[name="sortby"]:checked').value;
    let setSortDefaults = function(sortElement, sortby) {
      sortElement.forEach(element => {
        if (element.value == sortby) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      });
    };

    setSortDefaults(sortElement, sortby);

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

    document.querySelector('.js-modal-cancel').addEventListener('click', function() {
      setSortDefaults(sortElement, sortby);
      document.getElementById('app-modal').style = 'display:none';
    });

    document.querySelector('.js-modal-apply').addEventListener('click', function() {
      if (document.querySelector('.js-sort-modal').offsetParent) {
        sortby = document.querySelector('input[name="sortby"]:checked').value;
        store.dispatch('sort', document.querySelector('input[name="sortby"]:checked').value);
      } else {
        store.dispatch('filter', 'df');
      }

      document.getElementById('app-modal').style = 'display:none';
    });
  }
}
