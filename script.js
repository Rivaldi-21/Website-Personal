// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('heartsContainer').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 20000);
}

// Generate hearts
for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 1000);
}
setInterval(createHeart, 2000);

// Music control
let isPlaying = false;
const music = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.setAttribute('d', 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z');
    } else {
        music.play();
        musicIcon.setAttribute('d', 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
    }
    isPlaying = !isPlaying;
}

// Auto play music on first interaction
document.body.addEventListener('click', function() {
    if (!isPlaying) toggleMusic();
}, { once: true });
