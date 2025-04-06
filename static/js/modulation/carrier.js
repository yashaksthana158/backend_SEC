var xCar=0;
var intervalCar=null;

function startCar() {
    if(intervalCar!=null){
        clearInterval(intervalCar);
        xCar = 0
    }
    intervalCar = setInterval(function(){
        drawSineCar(xCar);
        xCar++;
        if(xCar>w){
        xCar=0;
      }
    },20); //Time in miliseconds
}

function stopCar() {
    if(intervalCar!=null){
        clearInterval(intervalCar);
        xCar = 0
      }
}


function calculateTimeCar(length=100) {
    return 2*(22/7)*(Math.sqrt(length/(9.80665*100)))
}

var cCar = document.getElementById("carrier");
var ctxCar = cCar.getContext("2d");
var w=cCar.width-50;
var h=(cCar.height/2)-4;

function calcSineYCar(x, f=10) {
    f = document.getElementById('c-frequency').value
    var aCar = document.getElementById('c-amplitude').value;
	return h - aCar * Math.sin( x * 2 * Math.PI * (f/w) );
}

function drawSineCar(x){
  ctxCar.clearRect(0, 0, w+50, h*2);
  ctxCar.fillText("Amplitude" ,10, 16)
  ctxCar.fillText("Frequency" ,w, h+20)
  ctxCar.beginPath();
  ctxCar.strokeStyle = "green";
  ctxCar.moveTo(0,h);
  ctxCar.lineTo(w,h);
  ctxCar.stroke();

  ctxCar.beginPath();
  ctxCar.moveTo(0,h);
  ctxCar.strokeStyle = "gray";
  for(var i=0;i<x;i++){
    var y = calcSineYCar(x);
  	ctxCar.moveTo(i,y);
    ctxCar.lineTo(x,y);
  }
  ctxCar.stroke();
  ctxCar.beginPath();
  ctxCar.strokeStyle = "red";
  for(var i=0;i<x;i++){
    var y = calcSineYCar(x);
    ctxCar.moveTo(x,h);
    ctxCar.lineTo(x,y);
  }
  ctxCar.stroke();


  ctxCar.beginPath();
  ctxCar.strokeStyle = "black";
  for(var i=0;i<x;i++){
    var y = calcSineYCar(i);
    ctxCar.lineTo(i,y);
  }
  ctxCar.stroke();
}

function stop() {
    document.getElementsByClassName("thread")[0].style.animation = "";
    if(interval!=null){
        clearInterval(interval);
      }
}
