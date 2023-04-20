// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// додавання стилів розмітки
const styles = document.createElement('style');
const styleText = `
  .timer {
    display: flex;  
  }
  .field {
    display: flex;
    margin: 10px;
    flex-direction: column;
  }
  .value{
    font-size: 34px;
    margin-left: auto;
    margin-right: auto;
  }
  .label{
    text-transform: uppercase;
    font-size: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;
styles.textContent = styleText;
document.head.appendChild(styles);

// Неактивна кнопка
const buttonEl = document.querySelector('[data-start]');
buttonEl.disabled = true;
// робота з бібліотекою
let dataInput = 0;
const dateTime = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateThis = new Date().getTime();
    console.log(selectedDates[0].getTime());
    dataInput = selectedDates[0].getTime();
    if (dataInput > dateThis) {
      buttonEl.disabled = false;
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};

flatpickr(dateTime, options);
// функція додавання 0 якзо число меньше 2х символів
const addLeadingZero = value => String(value).padStart(2, '0');

// цикл лічильника
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// відслідковування кнопки
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const dateThis = new Date();

function start() {
  buttonEl.disabled = true;
  dateTime.disabled = true;
  console.log(dateThis.getTime());
  console.log(dataInput);
  let ms = dataInput - dateThis.getTime();
  // таймер відліку
  timerEl = setInterval(() => {
    convertMs(ms);
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
    ms -= 1000;
    if (ms <= 0) {
      clearTimeout(timerEl);
      dateTime.disabled = false;
    }
  }, 1000);
}

buttonEl.addEventListener('click', start);
