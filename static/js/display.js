var sliderMA = document.getElementById('m-amplitude')
sliderMA.oninput = function () {
    document.getElementById('m-amplitude-display').innerHTML=sliderMA.value;
    document.getElementById('m-amplitude-d').value=sliderMA.value;
    document.getElementById('m-amplitude-display-d').innerHTML=sliderMA.value;
    modIndex();
}

var sliderMF = document.getElementById('m-frequency')
sliderMF.oninput = function () {
    document.getElementById('m-frequency-display').innerHTML=sliderMF.value;
    document.getElementById('m-frequency-d').value=sliderMF.value;
    document.getElementById('m-frequency-display-d').innerHTML=sliderMF.value;
}

var sliderCA = document.getElementById('c-amplitude')
sliderCA.oninput = function () {
    document.getElementById('c-amplitude-display').innerHTML=sliderCA.value;
    document.getElementById('c-amplitude-d').value=sliderCA.value;
    document.getElementById('c-amplitude-display-d').innerHTML=sliderCA.value;
    modIndex();
}

var sliderCF = document.getElementById('c-frequency')
sliderCF.oninput = function () {
    document.getElementById('c-frequency-display').innerHTML=sliderCF.value;
    document.getElementById('c-frequency-d').value=sliderCF.value;
    document.getElementById('c-frequency-display-d').innerHTML=sliderCF.value;
}




var sliderMAD = document.getElementById('m-amplitude-d')
sliderMAD.oninput = function () {
    document.getElementById('m-amplitude').value=sliderMAD.value;
    document.getElementById('m-amplitude-display').innerHTML=sliderMAD.value;
    document.getElementById('m-amplitude-display-d').innerHTML=sliderMAD.value;
    modIndex();
}

var sliderMFD = document.getElementById('m-frequency-d')
sliderMFD.oninput = function () {
    document.getElementById('m-frequency').value=sliderMFD.value;
    document.getElementById('m-frequency-display').innerHTML=sliderMFD.value;
    document.getElementById('m-frequency-display-d').innerHTML=sliderMFD.value;
}

var sliderCAD = document.getElementById('c-amplitude-d')
sliderCAD.oninput = function () {
    document.getElementById('c-amplitude').value=sliderCAD.value;
    document.getElementById('c-amplitude-display').innerHTML=sliderCAD.value;
    document.getElementById('c-amplitude-display-d').innerHTML=sliderCAD.value;
    modIndex();
}

var sliderCFD = document.getElementById('c-frequency-d')
sliderCFD.oninput = function () {
    document.getElementById('c-frequency').value=sliderCFD.value;
    document.getElementById('c-frequency-display').innerHTML=sliderCFD.value;
    document.getElementById('c-frequency-display-d').innerHTML=sliderCFD.value;
}

function modIndex() {
    var modIndex = (document.getElementById('c-amplitude').value / document.getElementById('m-frequency').value).toFixed(4)
    document.getElementById('modulation-index').innerHTML = modIndex;
    document.getElementById('modulation-index-d').innerHTML = modIndex;
    var status;
    var color;
    if(modIndex > 1) {
        status = "Over Modulation";
        color = "#ff0000";
    }
    else if(modIndex < 1) {
        status = "Under Modulation";
        color = "#ff0000";
    }
    else {
        status = "Critical Modulation";
        color = "#008000";
    }
    document.getElementById('status').innerHTML = status;
    document.getElementById('status').style.color = color;
    document.getElementById('status-d').innerHTML = status;
    document.getElementById('status-d').style.color = color;
}
