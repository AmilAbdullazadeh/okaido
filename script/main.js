var player = document.getElementById('mario');
var powerup = {
    audio: new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav'),
    play: function () {
        this.audio.currentTime = 0;
        this.audio.play();
    }
};
function movePlayer(element, incrX, incrY) {
    var x = Number(element.getAttribute('data-x')) + incrX;
    var y = Number(element.getAttribute('data-y')) + incrY;
    var speed = 10;
    if (incrX > 0) {
        element.style.transform = " translate(".concat(x, "px, ").concat(y, "px) scaleX(1)");
    }
    else {
        element.style.transform = " translate(".concat(x, "px, ").concat(y, "px) scaleX(-1)");
    }
    element.setAttribute('data-x', x.toString());
    element.setAttribute('data-y', y.toString());
}
window.addEventListener('keydown', function (e) {
    if (player !== null) {
        if (e.key === 'ArrowRight') {
            player.classList.add('caminar');
            movePlayer(player, 10, 0);
        }
        else if (e.key === 'ArrowLeft') {
            player.classList.add('caminar');
            movePlayer(player, -10, 0);
        }
    }
});
window.addEventListener('keyup', function (e) {
    if (player !== null) {
        player.classList.remove('caminar');
    }
});
