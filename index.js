 var keys=document.querySelectorAll("button");
 for(var i=0;i<keys.length;i++){
    keys[i].addEventListener("click",function(){
    var butpres=this.innerHTML;
    audiooutput(butpres)
    buttonAnimation(butpres)
    });
 }
    document.addEventListener("keydown",function(event){
    audiooutput(event.key)
    buttonAnimation(event.key)
    });
 function audiooutput(key)
 {
    switch (key) {
        case 'w':
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            console.log('no output selected');
            break;
    }

 }
 function buttonAnimation(event){
   var current=document.querySelector("."+event);
   current.classList.add('pressed');
 }