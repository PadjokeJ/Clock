const title_interval = setInterval(function()
{
    var date = new Date(Date.now());
    var start = "";
    if (date.getMinutes() < 10)
        {
            mid = "0"
        }
    var mid = ":";
    if (date.getMinutes() < 10)
    {
        mid = ":0"
    }
    document.title = start + date.getHours() + mid + date.getMinutes();
}, 1000);