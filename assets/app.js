let player = document.getElementById("player");


function channelUCV(){
    player.setAttribute('src','https://rudo.video/live/ucvtv2');
}
function channelTVMas(){
    player.setAttribute('src','https://mdstrm.com/live-stream/5c0e8b19e4c87f3f2d3e6a59?jsapi=true&loop=false&autoplay=true&controls=true&player=5c0e87c403a35601ebcffcf4&access_token=FLKY2GFWDawvuNPbOSp4AgTDVTN5bUhMhJbDNTySSNm6ElTQoAw8Jbiz8IhPqpxxvidUQFQCc1p');
}
function channelMega(){
    player.setAttribute('src','https://www.youtube.com/embed/BDr-rxo-Jio?autoplay=1&controls=0&rel=0');
}
function channelTVN(){
    player.setAttribute('src','https://www.youtube.com/embed/sjQsjgBt03I?autoplay=1&controls=0');
}
function channelCHV(){
    player.setAttribute('src','https://mdstrm.com/live-stream/5c928b7f6d6f41084bdae898?jsapi=true&autoplay=true&access_token=s3ii6npvhfV1QN88MlFvTQoen345KJxQK64WrXHB2Za53xHE1Sb7uPPC1aiNMPW2kqKaikZFWpj&custom.categoria_prontus=senal-online&custom.dfpLanguage=es&custom.dfpCountry=cl&custom.dfpShowName=senal-online&custom.dfpVidId=&custom.dfpURLEncoded=https%3A%2F%2Fwww.chilevision.cl%2Fsenal-online&custom.dfpRandomNumber=3408846668&custom.origen=chilevision&custom.iu=%2F99911224%2Fchilevision%2Flive%2Fsenal-online%2Flive&custom.app=false&custom.cust_params=sect%253Dlive%2526sub%253Dsenal-online%2526show%253Dsenal-online%2526videotype%253Dlive%2526cat%253Dlive%2526vidid%253D%2526site%253Dchilevision%2526app%253Dfalse%2526theme%253Dge&custom.amp=false&custom.appname=');
}
function channelTrece(){
    player.setAttribute('src','https://www.youtube.com/embed/aqPIiyPI10c?autoplay=1&controls=0');
}


var item = document.getElementById("video");
var live = document.getElementById("live");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{
   live.setAttribute("style", "opacity:0;")
}

function func1()
{  
    live.setAttribute("style", "opacity:1;")
}