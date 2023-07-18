let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");
let muteBoton = document.getElementById("mute");

setTimeout(()=>{document.getElementById('showTime').innerHTML=` Duracion video : ${video.duration.toFixed(2)}`},1000);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)   
}

playBoton.addEventListener('click',()=>{
    video.play()  
});

pauseBoton.addEventListener('click',()=>{
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

  

