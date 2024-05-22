function resizeParticles() {
    var particlesContainer = document.getElementById("particles-js");
    particlesContainer.style.height = document.body.scrollHeight+"px";
    // particlesContainer.style.width = document.body.scrollHeight+"px";
}

// resizeParticles();

window.addEventListener('resize', resizeParticles);
window.addEventListener('load', resizeParticles);