document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain-container');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        raindrop.style.opacity = Math.random();
        rainContainer.appendChild(raindrop);

        raindrop.addEventListener('animationend', () => {
            raindrop.remove();
        });
    }

    setInterval(createRaindrop, 50);
});
