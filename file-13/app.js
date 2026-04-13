songs=[{name:"End of Beginning", artist:"Djo",num:"67 112 270",album:"DECIDE",time:"2:39",id:"1"}, 
    {name:"Mary on a cross", artist:"Ghost",num:"70 458 382",album:"Seven Inches of Satanic Panic",time:"4:04",id:"2"},
    {name:"Risk it all", artist:"Bruno Mars",num:"21 325 244",album:"The Romantic",time:"3:32",id:"3"},
    {name:"Raindance", artist:"Dave,Tems",num:"43 342 224",album:"The Boy Who Played the Harp",time:"3:39",id:"4"},
    {name:"Ordinary", artist:"Alex Warren",num:"97 535 222",album:"You'll be Alright, Kid",time:"3:06",id:"5"},
    {name:"Sweater Weather", artist:"Neighbourhood",num:"35 535 322",album:"I Love You",time:"4:00",id:"6"},
    {name:"505", artist:"Arctic Monkeys",num:"87 353 238",album:"Favourite Worst Nightmare",time:"4:13",id:"7"},
    {name:"Die with a Smile", artist:"Lady Gaga",num:"34 533 899",album:"MAYHEM",time:"4:11",id:"8"},
    {name:"Sailor Song", artist:"Gigi Perez",num:"78 594 322",album:"At the Beach, At Every Life",time:"3:31",id:"9"},
    {name:"Little Dark Age", artist:"MGMT",num:"39 424 424",album:"Fourth Studio Album",time:"4:59",id:"10"}
]

list=document.querySelector(".list")
for(let i=0;i<songs.length;i++){
    list.innerHTML+=` 
    
    <li  class="  grid grid-cols-[2fr_1fr_1fr_0.5fr] text-white py-3 px-4 hover:bg-white/10 rounded-md items-center">
    <div class="flex items-center gap-4">
    <p>${songs[i].id}</p>
       <div class="relative w-10 h-10">
                <img onclick="playSpecificSong(${i})" class="w-full h-full o" src="./photos/image${i}.jpg">
                <div class="song-square absolute inset-0 bg-black opacity-0  pointer-events-none flex justify-center items-center" id="square-${i}">
                 <i id="play-icon-${i}" class="fa-solid fa-play text-white text-xs"></i>
                    <i id="pause-icon-${i}" class="fa-solid fa-pause text-white text-xs" style="display:none;"></i>
                </div>
            </div>
        <div class="flex flex-col">
            <span class="font-bold text-sm">${songs[i].name}</span>
            <span class="text-xs text-gray-400">${songs[i].artist}</span>
        </div>
    </div>

    <div class="text-center text-gray-300 text-sm">${songs[i].num}</div>

    <div class="text-center text-gray-300 text-sm">${songs[i].album}</div>

    <div class="text-right text-gray-300 text-sm">${songs[i].time}</div>
</li>`
}
let play=document.querySelector(".fa-play")
let pause=document.querySelector(".fa-pause")
let current_song = new Audio(); 
let current_index = 0;

play.addEventListener("click",()=>{
    play.style.display="none"
    pause.style.display="block"
 if (!current_song.src || current_song.src === "") {
        current_song.src = `./audio/song${current_index}.mp3`;
    }
    
    current_song.play();
    updateSquareVisual();
    
})

pause.addEventListener("click",()=>{
    pause.style.display="none"
    play.style.display="block"
    current_song.pause()
    updateSquareVisual();
})
function playimg(){
    document.querySelectorAll(".fa-play").forEach(p=>play())
}
function pauseimg(){
    document.querySelectorAll(".fa-pause").forEach(pa=>pause())
}
function updateSquareVisual() {
    document.querySelectorAll('.song-square').forEach(sq => sq.style.opacity = "0");
   let activeSquare = document.getElementById(`square-${current_index}`);
    let activePlay = document.getElementById(`play-icon-${current_index}`);
    let activePause = document.getElementById(`pause-icon-${current_index}`);

    if (activeSquare) {
        activeSquare.style.opacity = "0.5";
        if (current_song.paused) {
            activePlay.style.display = "block";
            activePause.style.display = "none";
        } else {
            activePlay.style.display = "none";
            activePause.style.display = "block";
        }
    }
    
}
function playSpecificSong(index) {
   if (current_index === index && !current_song.paused) {
        current_song.pause();
        play.style.display = "block";
        pause.style.display = "none";

    } else {
        current_index = index;
        current_song.src = `./audio/song${index}.mp3`;
        current_song.play();
        play.style.display = "none";
        pause.style.display = "block";
        
    }
    updateSquareVisual();
}
