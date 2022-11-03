import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

ref = {
  inputDataTime: document.querySelector('#datetime-picker'),
  btnStartTime: document.querySelector('[data-start]'),

  daysValueTime: document.querySelector('[data-days]'),
  hoursValueTime: document.querySelector('[data-hours]'),
  minutesValueTime: document.querySelector('[data-minutes]'),
  secondsValueTime: document.querySelector('[data-seconds]'),
};

ref.btnStartTime.disabled = true;
let userDateInput = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  disableMobile: 'true',
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }

    Notiflix.Notify.success('Thank you, the time is correct');

    userDateInput = selectedDates[0];
    ref.btnStartTime.disabled = false;
    ref.inputDataTime.setAttribute('disabled', true);
  },
};

const myInputDate = flatpickr('#datetime-picker', options);

function onBtnStartDateHandleClick() {

  ref.btnStartTime.disabled = true;

  const setIntervalId = setInterval(() => {
    const currentTime = new Date();
    let remainingUserTime = userDateInput - currentTime;

    if (remainingUserTime <= 0) {
      clearInterval(setIntervalId);
      remainingUserTime = 0;
      ref.inputDataTime.removeAttribute('disabled');
    }

    const resultTime = convertMs(remainingUserTime);
    updateInterface(resultTime);
  }, 1000);
  
}

ref.btnStartTime.addEventListener('click', onBtnStartDateHandleClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateInterface({ days, hours, minutes, seconds }) {
  ref.daysValueTime.textContent = days;
  ref.hoursValueTime.textContent = hours;
  ref.minutesValueTime.textContent = minutes;
  ref.secondsValueTime.textContent = seconds;
}