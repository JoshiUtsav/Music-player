const songs = [
    { songName: "Musafir", coverPath: "../img/covers/1.jpg", filePath: "../songs/1.mp3" },
    { songName: "I m an Albatraoz", coverPath: "../img/covers/2.jpg", filePath: "../songs/2.mp3" },
    { songName: "Aye Mere Pyare Watan", coverPath: "../img/covers/3.jpg", filePath: "../songs/3.mp3" },
    { songName: "Badnam", coverPath: "../img/covers/4.jpg", filePath: "../songs/4.mp3" },
    { songName: "Bam Bam bholey", coverPath: "../img/covers/5.jpg", filePath: "../songs/5.mp3" },
    { songName: "Mockingbird", coverPath: "../img/covers/6.jpg", filePath: "../songs/6.mp3" },
    { songName: "Hai Rama", coverPath: "../img/covers/7.jpg", filePath: "../songs/7.mp3" },
    { songName: "Until I Found You", coverPath: "../img/covers/8.jpg", filePath: "../songs/8.mp3" }
];

// PlayPause
let parentPlayButton = document.getElementById('plaPause');
// Audio
let audio = document.getElementById('my-audio');

let playedSongSinger = document.getElementById('playedSongSinger');
let playedSongName = document.getElementById('playedSongName');
let songSinger = document.getElementById('songSinger');
let song = Array.from(document.getElementsByClassName('song'));
let songPlayed = document.getElementById('song');

song.forEach((e, i) => {
    // console.log(e,i);
    e.getElementsByTagName('img')[0].src = songs[i].coverPath;
    e.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

// Play Song
let playButton = parentPlayButton.children[1];
playButton.addEventListener('click', playSong);
function playSong() {
    if (!audio) return;
    if (audio.paused) {
        audio.play();
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle');
        alert("these buttons is under contruction")
    } else {
        audio.pause();
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
    }
    // ProgressBar Updater
    let progressBar = document.getElementById('musicTimer');
    audio.ontimeupdate = () => {
        progressBar.value = audio.currentTime;
        progressBar.addEventListener('change', () => {
            audio.currentTime = progressBar.value;
        })
    };
};
// Heart
// Heart Toggle
let heartIcon = document.querySelector('#heartIcon');
let likedMessage = document.getElementById('likedMessage');
heartIcon.addEventListener('click', () => {
    likedMessage.style.display = "block";
    document.getElementById('heart').style.color = 'red';
    setInterval(() => {
        likedMessage.style.display = "none";
    }, 1000);
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playSongIcon')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}


Array.from(document.getElementsByClassName('playSongIcon')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audio.src = `../songs/${index}.mp3`;
        audio.currentTime = 0;
        audio.play();
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle');
    })
})
