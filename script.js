let startTime = 0;
let elapsedTime = 0;
let interval = null;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {

    let time = elapsedTime;

    let hours = Math.floor(time / 3600000);
    time %= 3600000;

    let minutes = Math.floor(time / 60000);
    time %= 60000;

    let seconds = Math.floor(time / 1000);

    let milliseconds = time % 1000;

    display.textContent =
        String(hours).padStart(2,'0') + ":" +
        String(minutes).padStart(2,'0') + ":" +
        String(seconds).padStart(2,'0') + ":" +
        String(milliseconds).padStart(3,'0');
}

document.getElementById("startBtn").addEventListener("click", function(){

    if(running) return;

    running = true;

    startTime = Date.now() - elapsedTime;

    interval = setInterval(function(){

        elapsedTime = Date.now() - startTime;

        updateDisplay();

    },10);

});

document.getElementById("pauseBtn").addEventListener("click", function(){

    if(!running) return;

    running = false;

    clearInterval(interval);

});

document.getElementById("resetBtn").addEventListener("click", function(){

    clearInterval(interval);

    running = false;

    elapsedTime = 0;

    updateDisplay();

    laps.innerHTML = "";

});

document.getElementById("lapBtn").addEventListener("click", function(){

    if(!running) return;

    const li = document.createElement("li");

    li.textContent = "Lap " + (laps.children.length + 1) + " - " + display.textContent;

    laps.prepend(li);

});

updateDisplay();