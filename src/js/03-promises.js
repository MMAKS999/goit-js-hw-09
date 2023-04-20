import Notiflix from 'notiflix';

const delayEl = document.getElementsByName('delay')[0];
const stepEl = document.getElementsByName('step')[0];
const amountEl = document.getElementsByName('amount')[0];
const formEl = document.querySelector('.form');

// Функція для створення промісу
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Asynchronous operation
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// Відслідковування сабміту форми

formEl.addEventListener('submit', event => {
  event.preventDefault();
  // зчитування даних форми
  let delayI = parseInt(delayEl.value);
  const stepElValue = parseInt(stepEl.value);
  // цикл виклику функції промісу
  for (let i = 1; i <= amountEl.value; i++) {
    createPromise(i, delayI)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delayI = stepElValue + delayI;
    console.log(stepElValue);
  }
});
