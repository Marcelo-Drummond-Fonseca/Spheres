document.body.onload = function(){
	var buttons = document.createElement("div");
	buttons.className = "container";
	var but1 = document.createElement("button");
	but1.innerHTML = "+1 bola";
	but1.style
	but1.onclick = function(){
		newCircle();
	}
	buttons.appendChild(but1);
	var but5 = document.createElement("button");
	but5.innerHTML = "+5 bolas";
	but5.onclick = function(){
		newCircle();
		newCircle();
		newCircle();
		newCircle();
		newCircle();
	}
	buttons.appendChild(but5);
	var but10 = document.createElement("button");
	but10.innerHTML = "+10 bolas";
	but10.onclick = function(){
		newCircle();
		newCircle();
		newCircle();
		newCircle();
		newCircle();
		newCircle();
		newCircle();
		newCircle();
		newCircle();
		newCircle();
	}
	buttons.appendChild(but10);
	document.body.appendChild(buttons);
	var line = document.createElement("hr");
	document.body.appendChild(line);
	newCircle();
	newCircle();
	newCircle();
	newCircle();
	newCircle();
};

function newCircle(){
	var divNova = document.createElement("div");
	divNova.className = "circle";
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	divNova.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
	divNova.id = "red-circle";
	divNova.onclick = function(){
		divNova.remove();
	}
	document.body.appendChild(divNova);	
};
