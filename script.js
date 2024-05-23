/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-images');
    carousels.forEach(carousel => {
        let index = 0;
        const images = carousel.querySelectorAll('img');
        const totalImages = images.length;
        
        setInterval(() => {
            index = (index + 1) % totalImages;
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 3000); // Cambia la imagen cada 3 segundos
    });
});
