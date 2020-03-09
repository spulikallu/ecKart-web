import noUiSlider from 'nouislider/distribute/nouislider.js';
export default class Modal {
  init(stepElement, valueElement) {
    noUiSlider.create(stepElement, {
      start: [100, 10000],
      range: {
        min: [100, 100],
        '10%': [500, 500],
        '50%': [4000, 1000],
        max: [10000]
      }
    });

    stepElement.noUiSlider.on('update', function(values) {
      valueElement.innerHTML = `
      <div class='filter-modal__range-start'> <i class="fas fa-rupee-sign"></i><span>${parseInt(
        values[0]
      )}</span></div>
         <div class='filter-modal__range-end'> <i class="fas fa-rupee-sign"></i><span>${parseInt(
           values[1]
         )}</span></div>`;
    });
  }
}
