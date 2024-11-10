const clock_interval = setInterval(function() 
{
    var date = new Date(Date.now());
    var mid = ":";
    if (date.getMinutes() < 10)
    {
        mid = ":0"
    }

    var time = date.getHours() + mid + date.getMinutes();
    document.getElementById('clock').innerHTML = time;
}, 100);