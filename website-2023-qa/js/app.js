let burger = document.querySelector(".burger");
let navMenu = document.querySelector(".group .navigation");

burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}));


/*Lightbox */

