const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
console.log(bodyEl);
let timerId = null;

// Запуск зміни кольору через натискання start
function start() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  // таймер для зміни кольору
  function timerColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
    // генерування кольору
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
  }
  timerId = setInterval(timerColor, 1000);
}

buttonStart.addEventListener('click', start);

// зупинка зміни кольору
function stop() {
  buttonStop.disabled = true;
  buttonStart.disabled = false;
  clearTimeout(timerId);
}

buttonStop.addEventListener('click', stop);
