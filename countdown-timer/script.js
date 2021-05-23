const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newSession = '14 October 2021';

function countdown(){
    const zNewSessionDate = new Date(newSession);
    const zCurrentDate = new Date();

    const totalSeconds = new Date(zNewSessionDate - zCurrentDate) / 1000;

    const zDays = Math.floor(totalSeconds / 3600 / 24);
    const zHours = Math.floor(totalSeconds / 3600) % 24;
    const zMinutes = Math.floor(totalSeconds / 60) % 60;
    const zSeconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(zDays);
    hoursEl.innerHTML = formatTime(zHours);
    minutesEl.innerHTML = formatTime(zMinutes);
    secondsEl.innerHTML = formatTime(zSeconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time ;
}
//Initial call 
countdown();
setInterval(countdown, 1000);