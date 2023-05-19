const themeButton = document.querySelector('.toggle-input');
const primaryColor = document.querySelectorAll('.primary-color');
const secondaryColor = document.querySelectorAll('.secondary-color');
const buttonRow = document.querySelectorAll('.light');
const buttonFirstRow = document.querySelectorAll('.btn__row--first');

const data = [
  [primaryColor, '--background-color', '#F1F2F3'],
  [secondaryColor, '--symbols-color', '#000'],
  [buttonFirstRow, '--row-first-color', '#D2D3DA'],
  [buttonRow, '--row-color', '#fff'],
];

const dayMode = function () {
  data.forEach((entry) => {
    const [elements, variable, value] = entry;
    elements.forEach((element) => element.style.setProperty(variable, value));
  });
  themeButton.dataset.mode = 'day';
};

const nightMode = function () {
  data.forEach((entry) => {
    const [elements, variable] = entry;
    elements.forEach((element) => element.style.removeProperty(variable));
  });
  themeButton.dataset.mode = 'night';
};

themeButton.addEventListener('click', function () {
  if (themeButton.dataset.mode === 'night') {
    dayMode();
  } else {
    nightMode();
  }
});
