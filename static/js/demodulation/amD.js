var xAMD=0;
var intervalAMD=null;

function startAMD() {
    if(intervalAMD!=null){
        clearInterval(intervalAMD);
        xAMD = 0
    }
    intervalAMD = setInterval(function(){
        drawSineAMD(xAMD);
        xAMD++;
        if(xAMD>w){
        xAMD=0;
      }
    },20); //Time in miliseconds
}

function stopAMD() {
    if(intervalAMD!=null){
        clearInterval(intervalAMD);
        xAMD = 0
      }
}


function calculateTimeAMD(length=100) {
    return 2*(22/7)*(Math.sqrt(length/(9.80665*100)))
}

var cAMD = document.getElementById("am-d");
var ctxAMD = cAMD.getContext("2d");
var w=cAMD.width-50;
var h=(cAMD.height/2)-4;

function calcSineYAMD(x, factor) {
    var aMsg = document.getElementById('m-amplitude-d').value;
    var deltaf = document.getElementById('c-amplitude-d').value;
    var fm = document.getElementById('m-frequency-d').value/1000;
    var fc = document.getElementById('c-frequency-d').value;
    //return h -( (aCar - aMsg * Math.sin( 2 * Math.PI * (fm/w) * x )) * Math.sin( 2 * Math.PI * (fc/w) * x ));
    return h-(aMsg*Math.cos(2*Math.PI*(fc/w)*x+((deltaf)/fm)*Math.sin(2*Math.PI*(fm/w)*x)))

}

function drawSineAMD(x){
    ctxAMD.clearRect(0, 0, w+50, h*2);
    ctxAMD.fillText("Amplitude" ,10, 16)
    ctxAMD.fillText("Frequency" ,w, h+20)
    ctxAMD.beginPath();
    ctxAMD.strokeStyle = "green";
    ctxAMD.moveTo(0,h);
    ctxAMD.lineTo(w,h);
    ctxAMD.stroke();

    ctxAMD.beginPath();
    ctxAMD.moveTo(0,h);
    ctxAMD.strokeStyle = "gray";
    for(var i=0;i<x;i++){
    var y = calcSineYAMD(x);
    ctxAMD.moveTo(i,y); 
    ctxAMD.lineTo(x,y);
    }
    ctxAMD.stroke();
    ctxAMD.beginPath();
    ctxAMD.strokeStyle = "red";
    for(var i=0;i<x;i++){
    var y = calcSineYAMD(x);
    ctxAMD.moveTo(x,h);
    ctxAMD.lineTo(x,y);
    }
    ctxAMD.stroke();


    ctxAMD.beginPath();
    ctxAMD.strokeStyle = "black";
    for(var i=0;i<x;i++){
    var y = calcSineYAMD(i);
    ctxAMD.lineTo(i,y);
    }
    ctxAMD.stroke();
}
