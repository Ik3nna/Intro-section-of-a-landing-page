const dropdown = document.querySelectorAll(".dropdown");

const menu = document.querySelector(".hamburger-menu");

const fluid = document.getElementById("fluid")

dropdown.forEach(function (drop) {
    drop.addEventListener("click", function () {
        drop.classList.toggle("rolldown");
    });
});

menu.addEventListener("click", function () {
    fluid.classList.toggle("active");
});