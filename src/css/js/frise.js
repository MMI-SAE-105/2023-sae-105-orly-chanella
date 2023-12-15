let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
    showSlides((slideIndex += n));
}

// Afficher la première image au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});
