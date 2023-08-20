var a = document.querySelector(".btn");
var b = document.querySelector(".bulb");


var switchbutton = 0;
a.addEventListener("click", function(){
 if(switchbutton == 0){
   b.style.backgroundColor = "Yellow";
   switchbutton = 1;
   b.innerHTML = " "
  

 }
 else{
    b.style.backgroundColor = "White";
    switchbutton = 0;
 }
  let audio = document.createElement("audio");

 audio.src = "./light-switch-156813.mp3";
  audio.autoplay = true;
});











