// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});


// Abrir a imagem no modal
const galleryItems = document.querySelectorAll('.gallery-item');
const modalImage = document.getElementById('modalImage');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-bs-img');
        modalImage.setAttribute('src', imageSrc);
    });
});


// Função para mostrar o vídeo quando a imagem for clicada
document.getElementById("play-video-btn").addEventListener("click", function() {
    // Oculta a imagem e mostra o vídeo
    document.getElementById("video-container").style.display = "block";
    // Inicia a reprodução do vídeo
    document.getElementById("video").play();
    // Oculta a imagem
    document.getElementById("play-video-btn").style.display = "none";
});
