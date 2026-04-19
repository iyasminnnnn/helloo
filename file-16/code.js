
let timeLeft = 120; 
const resendButton = document.querySelector('.button');
const timerElement = document.getElementById('timer');
resendButton.style.cursor = "not-allowed";
resendButton.style.opacity = "0.5";
const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60); 
    let seconds = timeLeft % 60; 
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.innerHTML = `${displayMinutes}:${displaySeconds}`;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerElement.innerHTML = "Expired";
        timerElement.style.color = "red";
       resendButton.style.cursor = "pointer";
        resendButton.style.opacity = "1";
        resendButton.classList.add('hover:underline');
    } else {
        timeLeft--; 
    }
}, 1000);
resendButton.addEventListener('click', () => {
    if (timeLeft <= 0) {
        window.location.reload(); 
    }
});
