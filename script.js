window.onload = function() {
    const audioElement = document.getElementById('sound');

    // Play audio and create ripple effect when clicking anywhere on the screen
    document.body.addEventListener('click', (event) => {
        audioElement.currentTime = 0; // Reset audio to the beginning
        audioElement.play().catch(error => {
            console.error('Error playing audio:', error);
        });

        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'trail';
        ripple.style.left = `${event.clientX - 10}px`;
        ripple.style.top = `${event.clientY - 10}px`;
        document.body.appendChild(ripple);
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });

    // Create trailing effect on mouse move
    document.body.addEventListener('mousemove', (event) => {
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = `${event.clientX - 10}px`;
        trail.style.top = `${event.clientY - 10}px`;
        document.body.appendChild(trail);
        trail.addEventListener('animationend', () => {
            trail.remove();
        });
    });
};