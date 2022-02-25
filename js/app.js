const output = document.getElementById('output');
const operatorsText = document.getElementById('operators-text');
const outputTop = document.getElementById('top-text-replace');
// get a reference to the container for the buttons

const clear = document.getElementById('clear');
const erase = document.getElementById('erase');
const comma = document.getElementById('comma');

// OPERATORS START

const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const enter = document.getElementById('enter');

// OPERATORS END

clear.addEventListener('click', () => {
  output.innerText = '';
  operatorsText.innerText = '';
  outputTop.innerText = '';
});
erase.addEventListener('click', () => {
  output.innerText = output.innerText.slice(0, -1);
});

const zeroBtn = document.getElementById('zero-btn');

const numberPad = document.getElementById('number-pad');

numberPad.addEventListener('click', (event) => {
  const button = event.target.closest('button');

  // figure out if the button is a number button
  const isNumber = Number(button.textContent);
  // did not click a button, clicked something else in the container

  if (!button) {
    return;
  }
  if (isNumber && output.innerText.length < 15) {
    let insideContent = button.textContent;
    output.innerText += insideContent;
  }
});

zeroBtn.addEventListener('click', () => {
  if (output.innerText != 0 && output.innerText.length < 15) {
    output.innerText += 0;
  }
});

divideBtn.addEventListener('click', () => {
  if (output.innerText != 0) {
    outputTop.innerText = output.innerText;
    output.innerText = '';
    operatorsText.innerText = '/';
  }
});

multiplyBtn.addEventListener('click', () => {
  if (output.innerText != 0) {
    outputTop.innerText = output.innerText;
    output.innerText = '';
    operatorsText.innerText = '*';
  }
});

minusBtn.addEventListener('click', () => {
  if (output.innerText != 0) {
    outputTop.innerText = output.innerText;
    output.innerText = '';
    operatorsText.innerText = '-';
  }
});

plusBtn.addEventListener('click', () => {
  if (output.innerText != 0) {
    outputTop.innerText = output.innerText;
    output.innerText = '';
    operatorsText.innerText = '+';
  }
});
comma.addEventListener('click', () => {
  if (output.innerText.length != 0 && !output.innerText.includes('.')) {
    output.innerText += '.';
  }
});

enter.addEventListener('click', () => {
  output.innerText = eval(
    outputTop.innerText + operatorsText.innerText + output.innerText
  );
  operatorsText.innerText = '';
  outputTop.innerText = '';
  if (output.innerText.length >= 15) {
    let allNumbers = output.innerText.slice(0, 16);
    let lastNumbers = allNumbers.slice(-2);
    output.innerText = allNumbers.slice(0, 14) + Math.round(lastNumbers);
  }
});
