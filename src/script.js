function resizeParticles() {
    var particlesContainer = document.querySelector(".background");
    particlesContainer.style.height = document.body.scrollHeight+"px";
    // particlesContainer.style.width = document.body.scrollHeight+"px";
}

resizeParticles();