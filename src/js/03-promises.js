import Notiflix from 'notiflix';

ref = {
  formEl: document.querySelector('form'),
  inputValueAllEl: document.querySelectorAll('input'),
};

let setIntervalId = null;

function handleSubmitCreatePromises(e) {
  e.preventDefault();

  const delayValue = Number(e.target.elements.delay.value);
  const stepValue = Number(e.target.elements.step.value);
  const amountValue = Number(e.target.elements.amount.value);

  
  // const {
  //   elements: { delay, step, amount },
  // } = e.currentTarget;

  // const delayValue = Number(delay.value);
  // const stepValue = Number(step.value);
  // const amountValue = Number(amount.value);

  let delay = delayValue;
  let position = 0;
  let intervalValue = 0;

  setIntervalId = setInterval(() => {
    position += 1;
    intervalValue += 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    if (intervalValue >= amountValue) {
      clearInterval(setIntervalId);
      return;
    }
    delay += stepValue;
  }, stepValue);
}

ref.formEl.addEventListener('submit', handleSubmitCreatePromises);

function createPromise(position, delay) {
  return new Promise((resolves, rejecteded) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolves({ position, delay });
    } else {
      rejecteded({ position, delay });
    }
  });
}
