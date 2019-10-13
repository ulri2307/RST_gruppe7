window.addEventListener("load", sidenVises);

const burgerButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".mainmenu-wrapper");

function sidenVises() {
    console.log("sidenVises ok")
    burgerButton.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu starter")
    menu.classList.toggle("hidden");

    let erSkjult = menu.classList.contains("hidden");

    if (erSkjult == true) {
        console.log("Bruger icon vises")

        burgerButton.classList.add("menu-toggle");
        burgerButton.classList.remove("toggle");

    } else {
        console.log("burger icon gemmes")
        burgerButton.classList.add("toggle");
    }
}
