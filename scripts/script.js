
/* alert(btnGo.textContent); */

/* global variables */

var types = [
		'Temp',
		'Arial',
		'BrushScript',
		'ComicSans',
		'Futura',
		'Helvetica', 
		'Impact',
		'Lithos',
		'Mistral', 
		'Rockwell', 
];




/* functions */
	
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 1);
}

function replaceType() {
	var numRand = Math.floor((Math.random()*9)+1);
	var randType = types[numRand];
	var el = document.getElementById('divType');
  	el.innerHTML = '<img src="img/200x200' + randType + '.png" class="resize">';  	
}

function replaceBtn() {
	document.getElementById("divBtn").className = "btnNext";
	divBtn.textContent = "Next";
}

function firstTransition(){
	replaceType(divType);
	replaceBtn(divBtn);
}






