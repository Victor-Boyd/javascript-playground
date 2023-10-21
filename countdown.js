

const hoursId = document.getElementById('hours');
const minutesId = document.getElementById('minutes');
const secondsId = document.getElementById('seconds');

const start = document.getElementById('start-button');

start.addEventListener('click', function() {
    let hours = hoursId.value
    let minutes = minutesId.value
    let seconds = secondsId.value

    let countDownInterval = setInterval(countDown, 1000)

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
}
})



