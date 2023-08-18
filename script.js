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
});











