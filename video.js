let video = document.querySelector("video");
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");
let muteBoton = document.getElementById("mute");
let volumeUpBoton = document.getElementById("volumeUp");
let volumeDownBoton = document.getElementById("volumeDown");

setTimeout(()=>{document.getElementById('showTime').innerHTML=` Duracion video : ${video.duration.toFixed(2)}`},1000);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)   
}

playBoton.addEventListener("click", function() {
    video.play()  
});

pauseBoton.addEventListener("click", function() {
    video.pause();
    flag=false;
});

muteBoton.addEventListener("click", function() {
    if (video.muted) {
      video.muted = false;     
    } else {
      video.muted = true;     
  }
});

  
volumeUpBoton.addEventListener("click", function() {
    if (video.volume < 1) {
      video.volume += 0.2; 
  }
});
  
volumeDownBoton.addEventListener("click", function() {
    if (video.volume > 0) {
      video.volume -= 0.2; 
  }
});
