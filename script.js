window.addEventListener("load", sidenVises);

const button = document.querySelector(".menu-toggle");
const menu = document.querySelector(".mainmenu-wrapper");

function sidenVises() {
    console.log("sidenVises ok")
    button.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu starter")
    menu.classList.toggle("hidden");

    let erSkjult = menu.classList.contains("hidden");

    if (erSkjult == true) {
        console.log("Bruger icon vises")

        button.classList.add("menu-toggle");
        button.classList.remove("toggle");

    } else {
        console.log("burger icon gemmes")
        button.classList.add("toggle");
    }
}
