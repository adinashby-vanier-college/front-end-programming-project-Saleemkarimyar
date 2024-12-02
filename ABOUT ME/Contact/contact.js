const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    container.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
});

container.addEventListener('mouseout', () => {
    container.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
});