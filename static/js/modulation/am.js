var x=0;
var intervalAM=null;

function startAM() {
    if(intervalAM!=null){
        clearInterval(intervalAM);
        x = 0
      }
    intervalAM = setInterval(function(){
        drawSine(x);
        x++;
        if(x>w){
        x=0;
      }
    },20); //Time in miliseconds
}

function stopAM() {
    if(intervalAM!=null){
        clearInterval(intervalAM);
        x = 0
      }
}


function calculateTime(length=100) {
    return 2*(22/7)*(Math.sqrt(length/(9.80665*100)))
}

var c = document.getElementById("am");
var ctx = c.getContext("2d");
var w=c.width-50;
var h=(c.height/2)-4;

function calcSineY(x) {
    var aMsg = document.getElementById('m-amplitude').value;
    var deltaf = document.getElementById('c-amplitude').value;
    var fm = document.getElementById('m-frequency').value/1000;
    var fc = document.getElementById('c-frequency').value;
	  // return h - aMsg * Math.sin( 2 * Math.PI * (fm/w) * x ) * Math.sin( 2 * Math.PI * (fc/w) * x );
    //return h -( (aCar - aMsg * Math.sin( 2 * Math.PI * (fm/w) * x )) * Math.sin( 2 * Math.PI * (fc/w) * x ));
    return h-(aMsg*Math.cos(2*Math.PI*(fc/w)*x+((deltaf)/fm)*Math.sin(2*Math.PI*(fm/w)*x)))
    // Y(t)=(asin2pifmt)sin2pifct
    // a = amplitude of message
    // x = time
    // frequency of am wave same as carrier
}

function drawSine(x){
  ctx.clearRect(0, 0, w+50, h*2);
  ctx.fillText("Amplitude" ,10, 16)
  ctx.fillText("Frequency" ,w, h+20)
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(0,h);
  ctx.lineTo(w,h);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0,h);
  ctx.strokeStyle = "gray";
  for(var i=0;i<x;i++){
    var y = calcSineY(x);
  	ctx.moveTo(i,y);
    ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.beginPath(); c
  ctx.strokeStyle = "red";
  for(var i=0;i<x;i++){
    var y = calcSineY(x);
    ctx.moveTo(x,h);
    ctx.lineTo(x,y);
  }
  ctx.stroke();


  ctx.beginPath();
  ctx.strokeStyle = "black";
  for(var i=0;i<x;i++){
    var y = calcSineY(i);
    ctx.lineTo(i,y);
  }
  ctx.stroke();
}
