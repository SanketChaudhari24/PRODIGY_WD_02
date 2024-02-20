const display = document.querySelector('.display');
const startPauseBtn = document.querySelector('.start-pause');
const resetBtn = document.querySelector('.reset');

let startTime;
let elapsedTime = 0;
let intervalId;
let isRunning = false;

startPauseBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        startPauseBtn.textContent = 'Start';
    } else {
        startTime = Date.now();
        intervalId = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay(elapsedTime);
        }, 10);
        isRunning = true;
        startPauseBtn.textContent = 'Pause';
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    isRunning = false;
    elapsedTime = 0;
    startPauseBtn.textContent = 'Start';
    updateDisplay(elapsedTime);
});

function updateDisplay(time) {
    const hours = Math.floor(time / (3600 * 1000));
    const minutes = Math.floor((time % (3600 * 1000)) / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    const milliseconds = Math.floor((time % 1000));

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}
