

const hoursId = document.getElementById('hours');
const minutesId = document.getElementById('minutes');
const secondsId = document.getElementById('seconds');

const hoursMeasureId = document.getElementById('hour-time-measure');
const minutesMeasureId = document.getElementById('minute-time-measure');
const secondsMeasureId = document.getElementById('second-time-measure');

const start = document.getElementById('start-button');
const reset = document.getElementById('reset-button');

let countDownInterval

start.addEventListener('click', function() {
    let hours = hoursId.value
    let minutes = minutesId.value
    let seconds = secondsId.value

    let hoursMeasure = hoursMeasureId.innerText
    let minutesMeasure = minutesMeasureId.innerText
    let secondsMeasure = secondsMeasureId.innerText

    countDownInterval = setInterval(countDown, 1000)


    function countDown(){
    if (seconds > 0 ) {
        seconds -= 1
        secondsId.value = seconds
    }
    else if (seconds == 0 && minutes > 0) {
        minutes -= 1
        seconds = 59
        secondsId.value = seconds
        minutesId.value = minutes

    }
    else if (seconds == 0 && minutes == 0 && hours > 0) {
        hours -= 1
        minutes = 59
        seconds = 59
        secondsId.value = seconds
        minutesId.value = minutes
        hoursId.value = hours
    }
    else {
        clearInterval(countDownInterval)
    }


    if (hours == 1) {
        hoursMeasure = "hour"
    }
    else {
        hoursMeasure = "hours"
    }

    if (minutes == 1) {
        minutesMeasure = "minute"
    }
    else {
        minutesMeasure = "minutes"
    }

    if (seconds == 1) {
        secondsMeasure = "second"
    }
    else {
        secondsMeasure = "seconds"
    }
    hoursMeasureId.innerText = hoursMeasure
    minutesMeasureId.innerText = minutesMeasure
    secondsMeasureId.innerText = secondsMeasure
}
})

reset.addEventListener('click', function() {
    hoursId.value = 0
    minutesId.value = 0
    secondsId.value = 0

    clearInterval(countDownInterval)

    hoursMeasureId.innerText = "hours"
    minutesMeasureId.innerText = "minutes"
    secondsMeasureId.innerText = "seconds"

})

