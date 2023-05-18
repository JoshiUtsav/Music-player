let progressBar = document.getElementById('musicTimer');
let playButton = document.getElementById('playPause');
let parentPlayButton = document.getElementById('plaPause');
let secondPlayButton = document.getElementById('playIcon');
let audio = document.getElementById('my-audio');
let songName = document.getElementById('songName');
let Heart = document.getElementById('Heart');
let heartIcon = document.getElementById('heartIcon');
let playedSongSinger = document.getElementById('playedSongSinger');
let songSinger = document.getElementById('songSinger');
let songPlay = document.getElementById('song');
let likedMessage = document.getElementById('likedMessage');
let playedSongTimeStart = document.getElementById('playedSongTimeStart');
let playedSongTimeRemaining = document.getElementById('playedSongTimeRemaining');
// Listen to event
// Playing/Pausing Audio Event
Array.from(audio).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e);
    });
})
songPlay.addEventListener('click', playSong);


// Changing Play
let playlistBtn = parentPlayButton.children[1];
playlistBtn.addEventListener('click', playPause);
function playPause() {
    playlistBtn.classList.remove('fa-play-circle');
    playlistBtn.classList.add('fa-pause-circle');
}
// Play Song
playButton.addEventListener('click', playSong);


function playSong() {
    if (!audio) return;
    if (audio.paused) {
        audio.play();
        playlistBtn.classList.remove('fa-play-circle');
        playlistBtn.classList.add('fa-pause-circle');
    } else {
        audio.pause();
        playlistBtn.classList.remove('fa-pause-circle');
        playlistBtn.classList.add('fa-play-circle');
    }
    // ProgressBar Updater
    audio.ontimeupdate = () => {
        // Get the current playback time of the audio in seconds
        let currentTime = audio.currentTime;
        // Update the progress bar value
        progressBar.value = currentTime;
        // Format the elapsed time of the song as "mm:ss"
        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        let formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        // Update the displayed elapsed time of the song
        playedSongTimeStart.innerHTML = `<div id="playedSongTimeStart">${formattedTime}</div>`;
        progressBar.addEventListener('change', () => {
            audio.currentTime = progressBar.value;
        })
    };
};

// Heart Icon Event
heartIcon.addEventListener('click', (e) => {
    // Heart Toggle
    Heart.style.color= "red";
    // Heart.style.color = "red"
    // Show pop-up message and hide it after 1.5 seconds
    likedMessage.style.display = "block";
    setInterval(() => {
        likedMessage.style.display = "none";
    }, 1500);
});