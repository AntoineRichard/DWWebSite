// JavaScript Document

const popable = document.querySelectorAll('.img_button');

popable.forEach(elem => elem.addEventListener('click', togglePopup));

function togglePopup(e) {
	e.preventDefault();
	var x = document.getElementById("navbar_state");
  	if (x.value === "Open") {
		document.getElementById("core").style.marginLeft = "0%";
	  	document.getElementById("navbar").style.display = "none";
		document.getElementById("logo-left-close").style.opacity = 1;
		document.getElementById("logo-left-open").style.opacity = 0;
		x.value = "Close";
	  	
  	} else {
	  	document.getElementById("core").style.marginLeft = "100px";
	  	document.getElementById("navbar").style.width = "100px";
		document.getElementById("navbar").style.display = "block";
		document.getElementById("logo-left-open").style.opacity = 1;
		document.getElementById("logo-left-close").style.opacity = 0;
		x.value = "Open";
	}
}


