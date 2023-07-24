const time = document.querySelector('h2');
const resetButton = document.querySelector('.reset');
const startStopButton = document.querySelector('.start');
const addButton = document.querySelector('.add');
const userTimeInput = document.getElementById('userTime');
const minusButton = document.querySelector('.minus');
let countDown;
let timeSecond = 0; // Initialize timeSecond with 0

time.innerHTML = timeSecond + 's';

function startCountdown() {
  timeSecond = userTimeInput.value; // Assigning the value from the input field to timeSecond
  countDown = setInterval(() => {
    timeSecond--;
    time.innerHTML = timeSecond + 's';

    if (timeSecond <= 0 || timeSecond < 1) {
      clearInterval(countDown);
      hidden();
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countDown);
}

addButton.addEventListener('click', function () {
  timeSecond++;
  time.innerHTML = timeSecond + 's';
});

minusButton.addEventListener('click', function () {
  timeSecond--;
  time.innerHTML = timeSecond + 's';
});

resetButton.addEventListener('click', function resetCountdown() {
  stopCountdown();
  timeSecond = 0;
  time.innerHTML = timeSecond + 's';
  startStopButton.textContent = 'START';
  addButton.disabled = false;
  minusButton.disabled = false;
});

startStopButton.addEventListener('click', function () {
  if (countDown) {
    stopCountdown();
    startStopButton.textContent = 'START';
    addButton.disabled = false;
    minusButton.disabled = false;
    resetButton.disabled = false;
  } else {
    startCountdown();
    startStopButton.textContent = 'STOP';
    addButton.disabled = true;
    minusButton.disabled = true;
    resetButton.disabled = true;
  }
});
