// calling elements
const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const sqrs = document.querySelector(".sqrs");
const apply = document.querySelector(".apply");


// generate sketchpad and boxes
let num = 16;
sqrs.value = num;
function generateBoxes(num) {
    console.log(container.style.height);
    let size = (600/num)+"px";
    for (i=0; i<num; i++) {
    container.appendChild(document.createElement("div"));
    let row = container.childNodes[i];
        for (k=0; k<num; k++) {
            row.appendChild(document.createElement("div"));
            row.childNodes[k].classList.add("box");
            console.log(size);
            row.childNodes[k].style.width=size;
            row.childNodes[k].style.height=size;
        };
    };
};
generateBoxes(num);


// functions
const box = document.querySelectorAll(".box");

function activateBox() {
    for (i=0; i<box.length; i++) {
        box[i].addEventListener("mouseover", function() {
            if (draw && !this.classList.contains("active")) {
                this.style.background="#9B5DE5";
            }
        });
        box[i].addEventListener("mousedown", function() {
            if (!this.classList.contains("active")) {
                this.style.background="#9B5DE5";
            }
        })
    }
}

function applyNumber() {
    apply.addEventListener("click", function() {
        empty();
        console.log(sqrs.value);
        generateBoxes(sqrs.value);
    })
}

function empty() {
    for (i=0; i<box.length; i++) { box[i].style.background="none"; };
};

let draw;
window.addEventListener("mousedown", function() { draw = true; })

window.addEventListener("mouseup", function() { draw = false; })


// calling functions and events
activateBox();
clear.addEventListener("click", empty);
applyNumber();