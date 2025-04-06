var xMsg=0;
var intervalMsg=null;

function startMsg() {
    if(intervalMsg!=null){
        clearInterval(intervalMsg);
        xMsg = 0
    }
    intervalMsg = setInterval(function(){
        drawSineMsg(xMsg);
        xMsg++;
        if(xMsg>w){
        xMsg=0;
      }
    },20); //Time in miliseconds
}

function stopMsg() {
    if(intervalMsg!=null){
        clearInterval(intervalMsg);
        xMsg = 0
      }
}


function calculateTimeMsg(length=100) {
    return 2*(22/7)*(Math.sqrt(length/(9.80665*100)))
}

var cMsg = document.getElementById("message");
var ctxMsg = cMsg.getContext("2d");
var w=cMsg.width-50;
var h=(cMsg.height/2)-4;

function calcSineYMsg(x, factor) {
    var f = document.getElementById('m-frequency').value/1000;
    var aMsg = document.getElementById('m-amplitude').value;
	return h - aMsg * Math.sin( x * 2 * Math.PI * (f/w) );
}

function drawSineMsg(x){
    ctxMsg.clearRect(0, 0, w+50, h*2);
    ctxMsg.fillText("Amplitude" ,10, 16)
    ctxMsg.fillText("Frequency" ,w, h+20)
    ctxMsg.beginPath();
    ctxMsg.strokeStyle = "green";
    ctxMsg.moveTo(0,h);
    ctxMsg.lineTo(w,h);
    ctxMsg.stroke();

    ctxMsg.beginPath();
    ctxMsg.moveTo(0,h);
    ctxMsg.strokeStyle = "gray";
    for(var i=0;i<x;i++){
    var y = calcSineYMsg(x);
    ctxMsg.moveTo(i,y);
    ctxMsg.lineTo(x,y);
    }
    ctxMsg.stroke();
    ctxMsg.beginPath();
    ctxMsg.strokeStyle = "red";
    for(var i=0;i<x;i++){
    var y = calcSineYMsg(x);
    ctxMsg.moveTo(x,h);
    ctxMsg.lineTo(x,y);
    }
    ctxMsg.stroke();


    ctxMsg.beginPath();
    ctxMsg.strokeStyle = "black";
    for(var i=0;i<x;i++){
    var y = calcSineYMsg(i);
    ctxMsg.lineTo(i,y);
    }
    ctxMsg.stroke();
}
