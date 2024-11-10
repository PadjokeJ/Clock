const timeControl = document.querySelector('input[type="datetime-local"]');
var date = new Date(Date.now());
var sep = ":"


var yr = date.getFullYear();
var mth = date.getMonth();
var day = date.getDate();
var hrs = date.getHours();
var mns = date.getMinutes();

timeControl.value = yr + "-" + mth + "-" + day + "T" + hrs + sep + mns;

timeControl.addEventListener("input", function(){
    target = document.getElementById("target_timestamp");
    document.getElementById("target_timestamp").innerHTML = Math.floor(new Date(timeControl.value).getTime() / 1000);
});