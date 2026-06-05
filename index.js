const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});