import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//get form element
const form = document.querySelector('.form');

//add event listener to form element
form.addEventListener('submit', handleFormSubmit);

//handle form submit
function handleFormSubmit(e) {
  e.preventDefault();
  const { amount, step, delay } = e.target.elements;
  let promiseDelay = Number(delay.value);
  //create promises according to amount value
  for (let i = 1; i <= Number(amount.value); i += 1) {
    createPromise(i, promiseDelay).then(onSuccess).catch(onError);
    promiseDelay += Number(step.value);
  }
  form.reset();
}
//callback function if promise fulfilled
function onSuccess({ position, delay }) {
  iziToast.success({
    message: `Fulfilled promise ${position} in ${delay}ms`,
    position: 'topRight',
  });
}
//callback function if promise rejected
function onError({ position, delay }) {
  iziToast.error({
    message: `Rejected promise ${position} in ${delay}ms`,
    position: 'topRight',
  });
}
//create promise
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
