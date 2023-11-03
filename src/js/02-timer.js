import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//access the elements on page
const minutesEl = document.querySelector('[data-minutes]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const secondsEl = document.querySelector('[data-seconds]');
const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
//add disabled attribute to button
startBtn.setAttribute('disabled', 'true');

startBtn.addEventListener('click', startBtnHandler);
//variables to store date selected in milliseconds and interval id
let selectedTime;
let intervalId;

//start button handler
function startBtnHandler() {
  startBtn.setAttribute('disabled', 'true');
  input.setAttribute('disabled', 'true');
  intervalId = setInterval(() => {
    updateTimer(selectedTime);
  }, 1000);
}
//iziToast options
const message = {
  title: 'Error',
  message: 'Please choose a date in the future',
  titleColor: '#ffffff',
  messageColor: '#ffffff',
  backgroundColor: 'rgb(231, 39, 39)',
  theme: 'light',
  position: 'topCenter',
};
//flatpicker options
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = new Date();
    if (selectedDates[0].getTime() > currentTime.getTime()) {
      startBtn.removeAttribute('disabled');
      selectedTime = selectedDates[0].getTime();
      return;
    }
    iziToast.show(message);
  },
};
function updateTimer(targetDate) {
  // Get the current date and time in milliseconds
  const currentDate = new Date().getTime();
  // Calculate the time remaining in milliseconds
  const timeRemaining = targetDate - currentDate;
  // stop countdown if reached zero
  if (timeRemaining <= 0) {
    clearInterval(intervalId);
    input.removeAttribute('disabled');
    return;
  }
  // Calculate days, hours, minutes, and seconds from timeRemaining
  const { days, hours, minutes, seconds } = convertMs(timeRemaining);
  // Update the timer elements with the calculated values
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

flatpickr('#datetime-picker', options);

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
//add leading zeros to the timer values
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
