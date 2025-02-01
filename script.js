document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Disparo do modal de vídeo
    const playVideoBtn = document.getElementById("play-video");
    if (playVideoBtn) {
      playVideoBtn.addEventListener("click", function() {
        const videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
        videoModal.show();
        const modalVideo = document.getElementById("modalVideo");
        modalVideo.play();
      });
    }
  
    // Pausa e reseta o vídeo quando o modal é fechado
    const videoModalEl = document.getElementById("videoModal");
    videoModalEl.addEventListener("hidden.bs.modal", function () {
      const modalVideo = document.getElementById("modalVideo");
      modalVideo.pause();
      modalVideo.currentTime = 0;
    });
  
    // Exemplo de envio do formulário de contato
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Sua mensagem foi enviada com sucesso!");
      contactForm.reset();
    });
  });
  