let hourel = document.querySelector(".hour");
let minutel = document.querySelector(".minute");
let secondel = document.querySelector(".second");

function getTime(){
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let mins = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    let hoursdeg = (hours/12) * 360;
    let mindeg = (mins/60) * 360;
    let secdeg = (sec/60) * 360;

    hourel.style.transform = `rotate(${hoursdeg}deg)`;
    minutel.style.transform = `rotate(${mindeg}deg)`;
    secondel.style.transform = `rotate(${secdeg}deg)`;
}
setInterval(getTime,1000)