const type_sel = document.getElementById("discord_type");
type_sel.style.display = "none";

document.getElementById("target_timestamp").style.display = "none";

const timeControl = document.querySelector('input[type="datetime-local"]');
var date = new Date(Date.now());
var sep = ":"


var yr = date.getFullYear();
var mth = date.getMonth() + 1;
var day = date.getDate();
var hrs = date.getHours();
if (hrs < 10){
    hrs = "0"+hrs;
}
var mns = date.getMinutes();
if (mns < 10){
    mns = "0"+mns;
}
if (day < 10){
    day = "0"+day;
}
if (mth < 10){
    mth = "0"+mth;
}


timeControl.value = yr + "-" + mth + "-" + day + "T" + hrs + sep + mns;

var unix_value;
var discord_type = "";

type_sel.addEventListener("change", function(){
    discord_type = type_sel.value;
    console.log(type_sel.value);
});

timeControl.addEventListener("input", function(){
    target = document.getElementById("target_timestamp");
    unix_value = Math.floor(new Date(timeControl.value).getTime() / 1000);
    document.getElementById("target_timestamp").innerHTML = "Click here to copy timestamp";
    type_sel.style.display = "block";
    document.getElementById("target_timestamp").style.display = "flex";
});

const unix_element = document.getElementById("target_timestamp");
unix_element.addEventListener("click", function(){
    navigator.clipboard.writeText("<t:"+unix_value+discord_type+">");
    unix_element.classList.toggle("clicked");
    
    var indicator = document.getElementById("unix_indicator");
    indicator.innerText = "Copied!";

    
    
    setTimeout( function(){
        unix.classList.toggle("clicked");
        indicator.innerText = "";
    }, 1000);
});
