const colors = ["#ffffff", "#000000", "#hffieo", "#j44fnw"]

const button = document.getElementById("button")
const color = document.querySelector(".main-container")

button.addEventListener("click", function() {
    // get random number from 0-3
    const randomNumber = Math.floor(Math.random() * 4)
    // log color
    console.log(colors[randomNumber])
    const newColor = (colors[randomNumber])
    document.body.style.backgroundColor = newColor
})