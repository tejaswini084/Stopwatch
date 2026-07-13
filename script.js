let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(ms){

let milliseconds = ms % 1000;

let seconds = Math.floor(ms / 1000) % 60;

let minutes = Math.floor(ms / 60000) % 60;

let hours = Math.floor(ms / 3600000);

return (
String(hours).padStart(2,"0")+":"+
String(minutes).padStart(2,"0")+":"+
String(seconds).padStart(2,"0")+"."+
String(milliseconds).padStart(3,"0")
);

}

function updateDisplay(){

elapsedTime = Date.now() - startTime;

display.textContent = formatTime(elapsedTime);

}

document.getElementById("start").onclick = function(){

if(!timerInterval){

startTime = Date.now() - elapsedTime;

timerInterval = setInterval(updateDisplay,10);

}

};

document.getElementById("pause").onclick = function(){

clearInterval(timerInterval);

timerInterval = null;

};

document.getElementById("reset").onclick = function(){

clearInterval(timerInterval);

timerInterval = null;

elapsedTime = 0;

display.textContent = "00:00:00.000";

laps.innerHTML = "";

};

document.getElementById("lap").onclick = function(){

if(elapsedTime===0) return;

const li = document.createElement("li");

li.textContent = formatTime(elapsedTime);

laps.appendChild(li);

};