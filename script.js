const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Inpt Min with Todays Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate Countdown /COmpleate UI
function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
    const distance = countdownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance & hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    // Populating Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Hide Input
    inputContainer.hidden =true;
    // Show COuntdown
    countdownEl.hidden = false;
    }, second);
}

// Take Values from Form Input
function updateCountdown(event) {
    event.preventDefault();
    countdownTitle =event.srcElement[0].value;
    countdownDate =event.srcElement[1].value;

    // Get number version of current Date, updateDOM
    countdownValue =new Date(countdownDate).getTime();
    updateDOM();
}

// Reset all Values
function reset() {
    // Hide Cuntdowns, show Input
    countdownEl.hidden = true;
    inputContainer.hidden = false;
    // Stop the countdown
    clearInterval(countdownActive);
    // Reset values
    countdownTitle = '';
    countdownDate = '';
}

// Event Listners
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);