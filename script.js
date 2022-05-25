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