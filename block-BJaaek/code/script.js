let first = document.querySelector('.first');
let second = document.querySelector('.second')
function clickChange(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    first.style.backgroundColor = bgColor;   
}

first.addEventListener("click",clickChange);

function hoverChange(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    second.style.backgroundColor = bgColor;   
}

second.addEventListener("mousemove",hoverChange);
