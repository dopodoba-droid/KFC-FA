function toggleMenu() {

    const menu = document.getElementById("navLinks");

    menu.classList.toggle("show");

}


// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        document
        .getElementById("navLinks")
        .classList.remove("show");

    });

});