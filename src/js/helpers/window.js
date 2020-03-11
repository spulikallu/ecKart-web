window.onresize = function() {
  const SORT_MODAL_CONTAINER = 'sort-modal';
  const FILTER_MODAL_CONTAINER = 'filter-modal';

  if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768) {
    document.getElementById(SORT_MODAL_CONTAINER).style = 'display:block';
    document.getElementById(FILTER_MODAL_CONTAINER).style = 'display:block';
  } else {
    document.getElementById(SORT_MODAL_CONTAINER).style = 'display:none';
    document.getElementById(FILTER_MODAL_CONTAINER).style = 'display:none';
  }
};
