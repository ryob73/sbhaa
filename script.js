const countDisplay = document.getElementById('count');
const counterBtn = document.getElementById('counter-btn');
const resetBtn = document.getElementById('reset-btn');
const backBtn = document.getElementById('back-btn');

let count = 0;

counterBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});
backBtn.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});