

let songindex = 4;
let audioelement = new Audio("songs/4.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
gif.style.opacity = 0;
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songitemplay = Array.from(document.getElementsByClassName("songitemplay"));
let mastersong = document.getElementById('mastersong');


let songs = [
    {songname:"O saiyaan", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songname:"Tuj mai rab dikhata hai", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songname:"Rcb anthem", filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songname:"Ayat", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songname:"Ek dil ek jaan", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songname:"Aaj ibaadat", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songname:"Meri sakhi mangal", filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    {songname:"Ye ishq tum na karna", filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    {songname:"Ishq di baajiyaan ", filepath:"songs/9.mp3", coverpath:"covers/9.jpg"},
    {songname:"Saiyaan", filepath:"songs/10.mp3", coverpath:"covers/10.jpg"}
];


songitem.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
    
})


//handle play pause
masterplay.addEventListener("click",() => {
    if(audioelement.paused || audioelement.currentTime <= 0){
        audioelement.play();
        // mastersong.innerText = songs[songindex].songname;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        console.log("playing");
        gif.style.opacity = 1;
        // masterplay.setAttribute('class:"fa-regular fa-3x fa-circle-pause"' , 'id:"masterplay"');
    }else{
        makeallplays();
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        console.log("stop");
        gif.style.opacity = 0;
    }
})

//handle seekbar
audioelement.addEventListener("timeupdate",() => {
    let progress = parseInt((audioelement.currentTime/audioelement.duration) * 100);
    myprogressbar.value = progress;
})


myprogressbar.addEventListener("change" , () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration)/100;
})

const makeallplays= () => {
    songitemplay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

songitemplay.forEach((element) => {
    element.addEventListener("click" ,(e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = `songs/${songindex}.mp3`;
        mastersong.innerText = songs[songindex-1].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})


document.getElementById('previous').addEventListener("click", () => {
    if(songindex > 1){
        
        songindex = songindex - 1;
        audioelement.src = `songs/${songindex}.mp3`;
        mastersong.innerText = songs[songindex-1].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        makeallplays();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
})

document.getElementById('next').addEventListener("click", () => {
    if(songindex < 10){
        
        songindex = songindex + 1;
        audioelement.src = `songs/${songindex}.mp3`;
        mastersong.innerText = songs[songindex-1].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        makeallplays();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
})