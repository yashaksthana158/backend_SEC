var xMsgD=0;
var intervalMsgD=null;

function startMsgD() {
    if(intervalMsgD!=null){
        clearInterval(intervalMsgD);
        xMsgD = 0
    }
    intervalMsgD = setInterval(function(){
        drawSineMsgD(xMsgD);
        xMsgD++;
        if(xMsgD>w){
        xMsgD=0;
      }
    },20); //Time in miliseconds
}

function stopMsgD() {
    if(intervalMsgD!=null){
        clearInterval(intervalMsgD);
        xMsgD = 0
      }
}


function calculateTimeMsgD(length=100) {
    return 2*(22/7)*(Math.sqrt(length/(9.80665*100)))
}

var cMsgD = document.getElementById("message-d");
var ctxMsgD = cMsgD.getContext("2d");
var w=cMsgD.width-50;
var h=(cMsgD.height/2)-4;

function calcSineYMsgD(x, factor) {
    var f = document.getElementById('m-frequency-d').value/1000;
    var aMsgD = document.getElementById('m-amplitude-d').value;
	return h - aMsgD * Math.sin( x * 2 * Math.PI * (f/w) );
}

function drawSineMsgD(x){
    ctxMsgD.clearRect(0, 0, w+50, h*2);
    ctxMsgD.fillText("Amplitude" ,10, 16)
    ctxMsgD.fillText("Frequency" ,w, h+20)
    ctxMsgD.beginPath();
    ctxMsgD.strokeStyle = "green";
    ctxMsgD.moveTo(0,h);
    ctxMsgD.lineTo(w,h);
    ctxMsgD.stroke();

    ctxMsgD.beginPath();
    ctxMsgD.moveTo(0,h);
    ctxMsgD.strokeStyle = "gray";
    for(var i=0;i<x;i++){
    var y = calcSineYMsgD(x);
    ctxMsgD.moveTo(i,y);
    ctxMsgD.lineTo(x,y);
    }
    ctxMsgD.stroke();
    ctxMsgD.beginPath();
    ctxMsgD.strokeStyle = "red";
    for(var i=0;i<x;i++){
    var y = calcSineYMsgD(x);
    ctxMsgD.moveTo(x,h);
    ctxMsgD.lineTo(x,y);
    }
    ctxMsgD.stroke();


    ctxMsgD.beginPath();
    ctxMsgD.strokeStyle = "black";
    for(var i=0;i<x;i++){
    var y = calcSineYMsgD(i);
    ctxMsgD.lineTo(i,y);
    }
    ctxMsgD.stroke();
}
