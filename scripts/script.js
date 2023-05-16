'use strict';

const input = document.querySelector('.main__input');
const buttons = document.querySelectorAll('.btn');
const lastNumber = document.querySelector('.main__descr');
let value = [];

const operations = function (expression) {
  if (expression.includes('^')) {
    const [number, power] = [...(expression + '')]
      .join(',')
      .replaceAll(',', '')
      .split('^');
    return Math.pow(+number, +power);
  } else {
    return eval(expression.join(''));
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    // getting number or operator
    const symbol = event.target.dataset.symbol;

    // checking the symbol
    if (symbol !== 'C' && symbol !== 'x' && symbol !== '=') {
      value.push(symbol);
      // displaying number on the screen
      input.value = value.join('');
    }

    // checking if symbol is "x"
    if (symbol === 'x') {
      // remove last number
      value = [...(value + '')].join(',').replaceAll(',', '').split('');
      value.splice(-1, 1);
      input.value = value.join('');
    }

    // checking if symbol is "C"
    if (symbol === 'C') {
      // delete input
      value.splice(0, value.length);
      input.value = value.join('');
    }

    if (symbol === '=') {
      const lastExpression = [...value].join(',').replaceAll(',', '');
      const result = operations(value);
      input.value = result.toFixed(1);
      value = [result];
      lastNumber.textContent = lastExpression;
    }
  });
});
