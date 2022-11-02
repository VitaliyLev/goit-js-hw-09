const ref = {
  btnStartEl: document.querySelector('[data-start]'),
  btnStopEl: document.querySelector('[data-stop]'),
  bodyBgColor: document.querySelector('body'),
};

let intervalId = null;
ref.btnStopEl.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnStartHandleClick() {
  intervalId = setInterval(() => {
    ref.bodyBgColor.style.backgroundColor = getRandomHexColor();
  }, 1000);

  ref.btnStartEl.disabled = true;
  ref.btnStopEl.disabled = false;
}

function onBtnStopHandleClick() {
  clearInterval(intervalId);
  ref.btnStopEl.disabled = true;
  ref.btnStartEl.disabled = false;
}

ref.btnStartEl.addEventListener('click', onBtnStartHandleClick);
ref.btnStopEl.addEventListener('click', onBtnStopHandleClick);