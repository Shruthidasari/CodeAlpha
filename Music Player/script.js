const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Update progress bar as the song plays
audio.ontimeupdate = () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
};

// Seek to new time when user interacts with progress bar
progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};

// Volume control
volume.oninput = () => {
  audio.volume = volume.value;
};