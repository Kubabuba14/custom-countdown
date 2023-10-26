const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set Date Inpt Min with Todays Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take Values from Form Input
function updateCountdown(event) {
    event.preventDefault();
    countdownTitle =event.srcElement[0].value;
    countdownDate =event.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}
// Event Listner
countdownForm.addEventListener('submit', updateCountdown);