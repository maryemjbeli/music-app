var btn=document.getElementById("btn")
var music=document.getElementById("music")
btn.onclick=function(){
    if(music.paused){
        music.play();
        btn.src="pause.png";
    }else{
        music.pause();
        btn.src="play.png";
    }
}
var text=document.getElementById("text");
    contenutText=text.textContent;
var splitText=contenutText.split("");
    text.textContent=""    ;
    for(let i=0; i<splitText.length; i++){
        text.innerHTML+="<span>"+splitText[i]+"<span>";
    }

    let char=0;
    let timer=setInterval(onTick,30);

    function onTick(){
        const span=text.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if(char===(splitText.length)*2){
            complet();
            return;
        }
    }

    function complet(){
        clearInterval(timer);
        timer=null;
    }
    console.log(splitText);