const audio = new Audio('ohNo.mp3');

window.onload = function() {
    const audioElement = document.getElementById('sound');
    audioElement.play().catch(error => {
        console.error('Autoplay failed:', error);
        // Retry playing the audio after a user interaction
        document.body.addEventListener('click', () => {
            audioElement.play().catch(err => {
                console.error('Error playing audio after user interaction:', err);
            });
        }, { once: true });
    });

    const replayButton = document.getElementById('replayButton');
    replayButton.addEventListener('click', () => {
        audioElement.currentTime = 0; // Reset audio to the beginning
        audioElement.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    });
};