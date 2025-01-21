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
document.getElementById("play-video-btn").addEventListener("click", function() {
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("video");

    // Garante que o vídeo seja exibido no mesmo tamanho
    videoContainer.style.display = "block";
    videoContainer.style.width = "100%";
    videoContainer.style.maxWidth = "600px"; // Ajusta para o valor máximo do CSS
    videoContainer.style.margin = "0 auto";

    video.play();
    this.style.display = "none"; // Oculta a imagem
});

