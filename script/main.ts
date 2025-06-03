const playBtn = document.getElementById('play') as HTMLButtonElement;
const prevBtn = document.getElementById('prev') as HTMLButtonElement;
const nextBtn = document.getElementById('next') as HTMLButtonElement;
const audio = document.getElementById('audio') as HTMLAudioElement;
const cover = document.getElementById('cover') as HTMLImageElement;
const title = document.getElementById('title') as HTMLHeadingElement;
const musicContainer = document.getElementById('music-container') as HTMLDivElement;
const progressContainer = document.getElementById('progress-container') as HTMLDivElement;
const progress = document.getElementById('progress') as HTMLDivElement;

const songs = ['Juice WRLD Ft Benny Blanco - Real Shit', 'Lil Baby, Lil Durk ft Rodwave - Rich Off Pain', 'Polo G – I Know'];

const songIndex = 0;

function loadSong(song: string) {
  title.textContent = song;
  audio.src = `./music/${song}.mp3`;
  cover.src = `./assets/${song}.jpg`;
}

loadSong(songs[songIndex]);

function playSong() {
  playBtn.querySelector('i.fas')?.classList.replace('fa-play', 'fa-pause');
  musicContainer.classList.add('play');
  audio.play();
}

function pauseSong() {
  playBtn.querySelector('i.fas')?.classList.replace('fa-pause', 'fa-play');
  musicContainer.classList.remove('play');
  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  isPlaying ? pauseSong() : playSong();
});


function updateProgress(e: Event) {
  const { duration, currentTime } = e.target as HTMLAudioElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress);
