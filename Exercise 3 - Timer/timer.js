// console.log("Exercise 3 - Timer");
const time = document.querySelector('h2');
const resetButton = document.querySelector('.reset');
const startStopButton = document.querySelector('.start');
const addButton = document.querySelector('.add');
const minusButton = document.querySelector('.minus');
let timeSecond = 32;
let countDown ;
time.innerHTML = timeSecond + 's';

// function updateTimer() {
//   time.innerHTML = timeSecond + 's';
// }

function startCountdown() {
    countDown = setInterval(() => {
    timeSecond--;
    time.innerHTML = timeSecond + 's';

    if (timeSecond <= 0 || timeSecond <1) {
      clearInterval(countDown);
      hidden();
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countDown);
}

addButton.addEventListener('click', function () {
    timeSecond += 1;
    time.innerHTML = timeSecond + 's';
  }
);

minusButton.addEventListener('click', function () {
    timeSecond -= 1;
    time.innerHTML = timeSecond + 's';
});

resetButton.addEventListener('click', function resetCountdown() {
    stopCountdown();
    timeSecond = 32; // Set it back to the initial value (32 seconds)
    time.innerHTML = timeSecond + 's';
    startStopButton.textContent = 'START';
    addButton.disabled = false;
    minusButton.disabled = false;
  });

startStopButton.addEventListener('click', function () {
  if (countDown) {
    // Countdown is running, stop it
    stopCountdown();
    startStopButton.textContent = 'START';
    addButton.disabled = false;
    minusButton.disabled = false;
    resetButton.disabled = false;
  } else {
    // Countdown is not running, start it
    startCountdown();
    startStopButton.textContent = 'STOP';
    addButton.disabled = true;
    minusButton.disabled = true;
    resetButton.disabled = true;
  }
});
