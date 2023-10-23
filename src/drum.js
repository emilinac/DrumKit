const keys = document.querySelectorAll('.key');
// const playing = document.getElementById('playing');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    const key = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    if (!audio) return; // stops the function

    key.classList.add('playing');
    audio.currentTime = 0; // will automatically rewind
    audio.play();
}

function removeTransition (e) {
    if (e.propertyName !== 'transform') return; // skip it if it is not a transform
    this.classList.remove('playing');
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);