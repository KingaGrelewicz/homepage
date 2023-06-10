{
    const welcome = () => {
        console.log("Hello World!😎")
    };

    const toggleBackground = () => {
        const body = document.documentElement;
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const changeColorButton = document.querySelector(".js-changeColorButton");
        changeColorButton.addEventListener("click", toggleBackground);
       
        welcome();
    };

    init();
}