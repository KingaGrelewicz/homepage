console.log("Hello World!😎")

let changeColorButton = document.querySelector(".js-changeColorButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

changeColorButton.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});