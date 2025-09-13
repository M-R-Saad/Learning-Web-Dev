function makeBodyYellow() {
    document.body.style.backgroundColor = "yellow";
}

function makeBodyCyan() {
    document.body.style.backgroundColor = "cyan";
}

const makeBodyRed = document.getElementById("make-body-red");

makeBodyRed.onclick = function makeRed () {
    document.body.style.backgroundColor = "red";
}

const heder1 = document.getElementById("hover-header");

heder1.addEventListener("mouseover", function () {
    heder1.style.color = "tomato";
});

heder1.addEventListener("mouseout", function () {
    heder1.style.color = "black";
});