import { SORT_BY_HIGH_PRICE, SORT_BY_LOW_PRICE, SORT_BY_DISCOUNT } from '../constants/strings.js';
export function applySearch(list, searchText) {
  return list.filter(item => {
    return item.name.toLowerCase().startsWith(searchText.toLowerCase());
  });
}

export function applySort(list, sortby) {
  if (!sortby) {
    sortby = SORT_BY_HIGH_PRICE;
  }
  return list.sort((item1, item2) => {
    let item1Price = item1.price - (item1.price * item1.discount) / 100;
    let item2Price = item2.price - (item2.price * item2.discount) / 100;
    if (sortby === SORT_BY_HIGH_PRICE && item1Price < item2Price) {
      return 1;
    } else if (sortby === SORT_BY_LOW_PRICE && item1Price > item2Price) {
      return 1;
    } else if (sortby === SORT_BY_DISCOUNT && item1.discount < item2.discount) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function applyFilter(list, filterMin, filterMax) {
  return list.filter(item => {
    let price = item.price - (item.price * item.discount) / 100;
    return price >= filterMin && price <= filterMax;
  });
}

export function getPropertyByKey(list, id) {
  return list.filter(item => {
    return item.id == id;
  })[0];
}
