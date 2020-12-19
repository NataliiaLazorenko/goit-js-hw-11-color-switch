import colors from './colors.js';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let intervalId = null;
refs.stopBtn.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackgroundColor() {
  intervalId = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = `${colors[randomIndex]}`;
  }, 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function stopChangeBackgroundColor() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;

  clearInterval(intervalId);
}

refs.startBtn.addEventListener('click', changeBackgroundColor);
refs.stopBtn.addEventListener('click', stopChangeBackgroundColor);
