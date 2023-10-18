const colors = ["#ffffff", "#111111", "#f5f5dc", "#ffebcd"]

const navbar = ["#000000", "#ffebcd", "#f5f5dc"]
const body = ["#111111", "#ffffff", "#f5f5dc", "#ffebcd"]
const modules = ["#ffffff", "#f5f5dc", "#ffebcd"]
const outlines = ["#ffffff", "#000000"]
const navbarText = ["#ffffff", "#000000"]
const moduleTitle = ["#ffffff", "#000000"]
const text = ["#ffffff", "#000000"]

const layout1 = [navbar[0], body[1], modules[0], outlines[1], navbarText[0], moduleTitle[1], text[1]]
const layout2 = [navbar[1], body[2], modules[0], outlines[1], navbarText[1], moduleTitle[0], text[1]]
const layout3 = [navbar[0], body[3], modules[1]]

const layouts = [layout1, layout2]

const button = document.getElementById("button")
const moduleColor = document.querySelectorAll(".mini-module")
const outlineColor = document.getElementById("color-change-module")
const navbarColor = document.querySelector(".navbar")
const moduleTitleColor = document.querySelectorAll(".mini-module-title")


button.addEventListener("click", function() {
    // get random number from 0-3
    const randomNumber = Math.floor(Math.random() * 2)
    // log color
    console.log(layouts[randomNumber]);
    const newLayout = (layouts[randomNumber]);
    // change colors
    navbarColor.style.backgroundColor = newLayout[0];
    document.body.style.backgroundColor = newLayout[1];
        moduleColor.forEach((module) => {
        module.style.backgroundColor = newLayout[2];
      });
    outlineColor.style.outlineColor = newLayout[3];
    navbarColor.style.color = newLayout[4];
    moduleTitleColor.style.color = newLayout[5];
    document.body.style.fontColor = newLayout[6];
})