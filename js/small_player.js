let playBtn = document.getElementsByClassName("table-play-icon");
let audio = document.getElementById('audio-songs');
let playing;
let isPlaying = false;
let currentIdx=0;

let player = document.querySelector('.player');
let playerImg = document.querySelector('.player .music img');
let playerName = document.querySelector('.player .music span');
let leftTime = document.querySelector(".left-time");
let rightTime = document.querySelector(".right-time");
let progress = document.querySelector(".my-progress-touch");
let bar = document.querySelector(".my-bar");
let startBtn = document.querySelector(".music-start");
let pauseBtn = document.querySelector(".music-pause");
let prevBtn = document.querySelector(".icon-prev");
let nextBtn = document.querySelector(".icon-next");
let playerPlayBtn = document.querySelector('.music-start');
let playerPauseBtn = document.querySelector('.music-pause');

function updatePlayBtn(item){
    if(item.classList.contains('clicked')){
        item.src = "assets/images/player/pause.svg"
    }else{
        item.src = "assets/images/player/play.svg"
    }
}

function playMusic(musicName){
    if(musicName !== playing){audio.src = `assets/musics/${musicName}.mp3`;}
    audio.play();  
    isPlaying = true;
    playing = musicName;
    setPlayer();
}

[...playBtn].map((item, index)=>{
    item.addEventListener('click', ()=>{
    playBtnClass(index);  
    })
});

function playBtnClass(index){
    [...playBtn].map((btn, i) => {
        if(i!==index)btn.classList.remove('clicked');
        if(i===index){
            if(btn.classList.contains('clicked')){
                audio.pause();
                isPlaying = false;
                removePlayer();
                btn.classList.remove('clicked');
            }else{
                btn.classList.add('clicked');
                currentIdx = i;
                playMusic(btn.dataset.music);
            }
        };
        updatePlayBtn(btn);
    });
}

audio.addEventListener('ended', () => {
    [...playBtn].map((item) => {
        item.classList.remove('clicked');
        updatePlayBtn(item);
    })
});

startBtn.addEventListener("click", () => {
    isPlaying = true;
    startBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    playBtnClass(currentIdx);
    playMusic(playing);
});

pauseBtn.addEventListener("click", () => {
    isPlaying = false;
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    playBtnClass(currentIdx);
    audio.pause();
});

nextBtn.addEventListener("click", () => {
    setIndex("next");
    playBtnClass(currentIdx);
    playMusic(playBtn[currentIdx].dataset.music);
});

prevBtn.addEventListener("click", () => {
    setIndex("prev");
    playBtnClass(currentIdx);
    playMusic(playBtn[currentIdx].dataset.music);
});

function setIndex(dir) {
    switch (dir) {
    case "next":
        currentIdx++;
        if (currentIdx > 4) {
            currentIdx = 0;
        }
        break;
    case "prev":
        currentIdx--;
        if (currentIdx < 0) {
            currentIdx = 4;
        }
        break;
    }
}

audio.addEventListener("timeupdate", () => {
    let maxWidth = progress.clientWidth;
    bar.style.width = `${(maxWidth * audio.currentTime) / audio.duration}px`;
  
    leftTime.innerHTML = makeAudioTimeText(audio.currentTime);
});
  
audio.addEventListener("ended", () => {
if (!isLoop) {
    setIndex("next");
}
setMusic();
});

function setPlayer(){
    player.style.right = '40px';
    playerImg.src = `assets/images/albums/${playing}.jpg`;
    playerName.innerHTML = playing;
    playerPlayBtn.style.display = "none";
    playerPauseBtn.style.display = "inline-block";
}

function removePlayer(){
    player.style.right = '-390px';
}