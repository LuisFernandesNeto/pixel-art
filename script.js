//4
let n = 5;


let pixelBox = document.querySelector("#pixel-board");
function createBox() {
    for (let index = 0; index < n; index += 1) {
        for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
            let div = document.createElement("div");
            div.className = "pixel";
            div.style.backgroundColor = "white";
            pixelBox.appendChild(div);
        }
    }
}

//10
createBox();

let button2 = document.getElementById("generate-board");
let size = document.getElementById("board-size")

button2.addEventListener("click", function () {
    let n = size.value;
    if (n == "") {
        alert("Board inválido!")
    }
    /* pixelBox.removeChild(); */

    for (let index = 0; index < n; index += 1) {
        for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
            let div = document.createElement("div");
            div.className = "pixel";
            div.style.backgroundColor = "white";
            pixelBox.appendChild(div);
        }
    }
})

//7
let colors = document.getElementsByClassName("color");
let palette = document.querySelector("#color-palette");

palette.addEventListener("click", function (event) {
    let add = event.target;
    for (let index = 0; index < colors.length; index += 1) {
        colors[index].classList.remove("selected");
    }
    add.classList.add("selected");
})

//8
let box = document.getElementById("pixel-board");

let paint;

box.addEventListener("click", function (event) {
    for (let index = 0; index < colors.length; index += 1) {
        if (colors[index].className.includes("selected")) {
            console.log(paint = getComputedStyle(colors[index]).backgroundColor);
        }
    }
    event.target.style.backgroundColor = paint;
})

//9

let button = document.querySelector("#clear-board");

button.addEventListener("click", function (event) {
    let pixel = document.getElementsByClassName("pixel");
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = "white"
    }
    event.target.style.backgroundColor = "white";
})
