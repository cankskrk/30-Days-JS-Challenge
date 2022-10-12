const playSound = (event) => {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0 // basa geri sardik
    audio.play()
    key.classList.add("playing")

    setTimeout(() => {
        key.classList.remove("playing")
    }, 300)
}

window.addEventListener("keydown", playSound)

// const keys = document.querySelectorAll(".key")

// keys.forEach(key => key.addEventListener('transitionend', (event) => {
//     if (event.propertyName !== "transition") return
//     event.classList.remove("playing")
// }))
