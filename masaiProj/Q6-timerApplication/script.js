

// document.querySelector("start").addEventListener("click", start)

let x;
let milisecStart = "00"
let secStart = "00"
let minStart = "00"
let hrStart = "00"
let time;

function showTime() {

    if (time == true) {
        milisecStart++
        if (milisecStart > 99) {
            secStart++
            milisecStart = 0
        }

        if (secStart > 59) {
            minStart++
            secStart = 0
        }

        if (minStart > 59) {
            hrStart++
            minStart = 0
        }

        console.log(secStart);

        document.querySelector("#milisec").innerText = milisecStart
        document.querySelector("#sec").innerText = secStart
        document.querySelector("#min").innerText = minStart
        document.querySelector("#hr").innerText = hrStart

    }
}



function start() {
    time = true
    x = setInterval(showTime, 10);
}

function stop() {
    time = false
    clearInterval(x)
}

function reset() {

    time = false
    clearInterval(x)
    document.querySelector("#milisec").innerText = '00';
    document.querySelector("#sec").innerText = '00';
    document.querySelector("#min").innerText = '00';
    document.querySelector("#hr").innerText = '00';

    milisecStart = "00"
    secStart = "00"
    minStart = "00"
    hrStart = "00"
}

