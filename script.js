// calling elements
const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const sqrs = document.querySelector(".sqrs");
const apply = document.querySelector(".apply");


// generate sketchpad and boxes
function generateBoxes(num) {
    sqrs.value = num;
    let size = (600 / num) + "px";
    for (i = 0; i < num; i++) {
        container.appendChild(document.createElement("div"));
        let row = container.childNodes[i];
        for (k = 0; k < num; k++) {
            row.appendChild(document.createElement("div"));
            row.childNodes[k].classList.add("box");
            row.childNodes[k].style.width = size;
            row.childNodes[k].style.height = size;
            console.log(row.childNodes[k].style.width)
        };
    };
};
generateBoxes(100);


// functions
const box = document.querySelectorAll(".box");

function activateBox() {
    for (i = 0; i < box.length; i++) {
        box[i].addEventListener("mouseover", function () {
            if (draw && !this.classList.contains("active")) {
                this.style.background = "#9B5DE5";
            }
        });
        box[i].addEventListener("mousedown", function () {
            if (!this.classList.contains("active")) {
                this.style.background = "#9B5DE5";
            }
        })
    }
}

function applyNumber() {
    apply.addEventListener("click", function () {
        empty();
        if (sqrs.value <101) { generateBoxes(sqrs.value); }
        else { sqrs.value = 100 };
    })
}

function empty() {
    for (i = 0; i < box.length; i++) { box[i].style.background = "none"; };
};

let draw;
window.addEventListener("mousedown", function () { draw = true; })

window.addEventListener("mouseup", function () { draw = false; })


// calling functions and events
activateBox();
clear.addEventListener("click", empty);
applyNumber();