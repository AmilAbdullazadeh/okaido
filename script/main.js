var playBtn = document.getElementById('play');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var audio = document.getElementById('audio');
var cover = document.getElementById('cover');
var title = document.getElementById('title');
var musicContainer = document.getElementById('music-container');
var progressContainer = document.getElementById('progress-container');
var progress = document.getElementById('progress');
var songs = ['Juice WRLD Ft Benny Blanco - Real Shit', 'Lil Baby, Lil Durk ft Rodwave - Rich Off Pain', 'Polo G – I Know'];
var songIndex = 0;
function loadSong(song) {
    title.textContent = song;
    audio.src = "./music/".concat(song, ".mp3");
    cover.src = "./assets/".concat(song, ".jpg");
}
loadSong(songs[songIndex]);
function playSong() {
    var _a;
    (_a = playBtn.querySelector('i.fas')) === null || _a === void 0 ? void 0 : _a.classList.replace('fa-play', 'fa-pause');
    musicContainer.classList.add('play');
    audio.play();
}
function pauseSong() {
    var _a;
    (_a = playBtn.querySelector('i.fas')) === null || _a === void 0 ? void 0 : _a.classList.replace('fa-pause', 'fa-play');
    musicContainer.classList.remove('play');
    audio.pause();
}
playBtn.addEventListener('click', function () {
    var isPlaying = musicContainer.classList.contains('play');
    isPlaying ? pauseSong() : playSong();
});
function updateProgress(e) {
    var _a = e.target, duration = _a.duration, currentTime = _a.currentTime;
    var progressPercent = (currentTime / duration) * 100;
    progress.style.width = "".concat(progressPercent, "%");
}
audio.addEventListener('timeupdate', updateProgress);
