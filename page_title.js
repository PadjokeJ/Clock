const title_interval = setInterval(function()
{
    var date = new Date(Date.now());
    var mid = ":";
    if (date.getMinutes() < 10)
    {
        mid = ":0"
    }
    document.title = date.getHours() + mid + date.getMinutes();
}, 1000);