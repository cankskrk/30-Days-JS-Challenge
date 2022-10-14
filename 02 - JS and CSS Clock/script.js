const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

const setDate = () => {
    const now = new Date()

    // For Seconds
    const seconds = now.getSeconds()
    const secondsDegree = ((seconds / 60) * 360) + 90 // Cubuk konumu yuzunden 90 derece ekledik gercek zamani yakalasin diye.
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    // transition ozelliginden dolayi gecikme yasaniyor ve second-hand geriye sariyor.
    if (secondsDegree == 90) {
        secondHand.classList.add("no-transition")
    }
    else {
        secondHand.classList.remove("no-transition")
    }


    // For Mins
    const mins = now.getMinutes()
    const minsDegree = ((mins / 60) * 360) + 90
    minHand.style.transform = `rotate(${minsDegree}deg)`

    if (minsDegree == 90) {
        minHand.classList.add("no-transition")
    }
    else {
        minHand.classList.remove("no-transition")
    }


    // For Hours
    const hours = now.getHours()
    const hoursDegree = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

    if (hoursDegree == 90) {
        hourHand.classList.add("no-transition")
    }
    else {
        hourHand.classList.remove("no-transition")
    }
}

setInterval(setDate, 1000)