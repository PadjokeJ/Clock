const clock_interval = setInterval(function() 
{
    var date = new Date(Date.now());
    var start = "";
    if (date.getMinutes() < 10)
        {
            mid = "0"
        }
    var mid = ":";
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
    setTimeout( function(){
        unix.classList.toggle("clicked");
    }, 1000);
});