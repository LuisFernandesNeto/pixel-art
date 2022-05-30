//4
let line = 5;
let column = 5;

let pixelBox = document.querySelector("#pixel-board");
function createBox() {
    for (let index = 0; index < line; index += 1) {
        for (let secondIndex = 0; secondIndex < column; secondIndex +=1) {
            let div = document.createElement("div");
            div.className = "pixel";
            div.style.backgroundColor = "white";
            pixelBox.appendChild(div);
        }
    }
}
createBox();

//7
const firstColor = document.querySelector(".first");
const secondColor = document.querySelector(".second");
const thirdColor = document.querySelector(".third");
const fourthColor = document.querySelector(".fourth");

function handleChangeSelect(event) {
    const selectEvent = document.querySelector(".selected");
    selectEvent.classList.remove("selected");
    event.target.classList.add("selected");
}

firstColor.addEventListener("click", handleChangeSelect);
secondColor.addEventListener("click", handleChangeSelect);
thirdColor.addEventListener("click", handleChangeSelect);
fourthColor.addEventListener("click", handleChangeSelect);

//8
    let box = document.querySelector("#pixel-board");
    let selected = document.querySelector(".selected");
    let colors = document.querySelectorAll(".color");
    let paint;

            
        box.addEventListener("click", function(event) {
            for (let index = 0; index < colors.length; index += 1) {
                if (colors[index].className.includes("selected")) {
                    paint = getComputedStyle(box, null).getPropertyValue("selected")
                }
            }
            event.target.style.backgroundColor = paint;
        })
        