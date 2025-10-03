const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuOpen = !menuOpen;
    menuBtn.innerHTML = menuOpen ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";
});

// Cierra el menú al hacer clic en un link
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuOpen = false;
        menuBtn.innerHTML = "<i class='bx bx-menu'></i>";
    });
});
