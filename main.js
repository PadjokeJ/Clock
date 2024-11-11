

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

document.onfullscreenchange = function(event){
    if (document.fullscreenElement){
        document.getElementByClassName("hide_on_fullscreen").display = "none";
    } else{
        document.getElementByClassName("hide_on_fullscreen").display = "block";
    }
}
        
