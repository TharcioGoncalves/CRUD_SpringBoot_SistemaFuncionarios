window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader")
    let content = document.querySelector(".row");
    setTimeout(function () {
        preloader.style.display = "none";
        content.style.display = "flex";
    },1000)
})