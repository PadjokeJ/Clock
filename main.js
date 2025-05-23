const fsbutton = document.getElementById("fullscreen_button");
const clock_interval = setInterval(function() 
{
    var date = new Date(Date.now());
    var start = "";
    if (date.getHours() < 10)
    {
        start = "0"
    }
    var mid = ":";
    if (date.getMinutes() < 10)
    {
        mid = ":0"
    }

    var time = start + date.getHours() + mid + date.getMinutes();
    document.getElementById("clock").innerHTML = time;
    document.getElementById("timestamp").innerHTML = Math.round(Date.now() / 1000);
}, 100);


const unix = document.getElementById("timestamp");
unix.addEventListener("click", function(){
    navigator.clipboard.writeText(Math.round(Date.now() / 1000));
    unix.classList.toggle("clicked");
    
    var indicator = document.getElementById("indicator");
    indicator.innerText = "Copied!";
    
    setTimeout( function(){
        unix.classList.toggle("clicked");
        indicator.innerText = "";
    }, 1000);
});

function tofs(){
    console.log("fullscreen event triggered");
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement){
        document.getElementById("hide_on_fullscreen").style.display = "none";
        fsbutton.src = "img/exitfs.svg";
        fsbutton.addEventListener("click", function(){
            document.exitFullscreen();
        });

    } else{
        document.getElementById("hide_on_fullscreen").style.display = "block";
        fsbutton.src = "img/fullscreen.svg";
        fsbutton.addEventListener("click", function(){
            document.documentElement.requestFullscreen();
        });
    }
}

document.addEventListener("fullscreenchange", tofs);

document.addEventListener("mozfullscreenchange", tofs);

document.addEventListener("webkitfullscreenchange", tofs);

document.addEventListener("msfullscreenchange", tofs);


fsbutton.addEventListener("click", function(){
    document.documentElement.requestFullscreen();
});