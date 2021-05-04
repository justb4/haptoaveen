// JavaScript Document
var timer = 0;

function MouseOut() {
	timer = window.setTimeout(Hideall, 500);
}

function fCancelTimer() {
	if(timer) {
		window.clearTimeout(timer);
		timer = null;
	}
}

// show hidden layers
function MouseOverMenu(uitklapmenux) {

	fCancelTimer();

	if (uitklapmenux != 0){
		Hideall();
		document.getElementById(uitklapmenux).appear(); //.blindDown();
		img = uitklapmenux + "img";
		document.getElementById(img).appear();
	}
}

function Hideall(){ 
	document.getElementById("uitklapmenuhapto").style.display = "none";
	document.getElementById('uitklapmenucoach').style.display = "none";
	document.getElementById('uitklapmenuprak').style.display = "none";
	
	document.getElementById("uitklapmenuhaptoimg").style.display = "none";
	document.getElementById('uitklapmenucoachimg').style.display = "none";
	document.getElementById('uitklapmenuprakimg').style.display = "none";
	document.getElementById("truiverwerimg").style.display = "none";
	document.getElementById('contactimg').style.display = "none";
	document.getElementById('linksimg').style.display = "none";

}

function Menukeuze(text) {
	Hidealltext();
	document.getElementById(text).style.display = "block";
	jQuery('#menuToggle').toggleClass('-open');
	jQuery('.submenu').hide();
}

function Hidealltext() { //alle tekst divs toeveogen
	document.getElementById("coaching").style.display = "none";
	document.getElementById("haptotherapie").style.display = "none";
	document.getElementById("hvoorwie").style.display = "none";
	document.getElementById("hwerkwijze").style.display = "none";
	document.getElementById("cvoorwie").style.display = "none";
	document.getElementById("cwerkwijze").style.display = "none";
	document.getElementById("kosten").style.display = "none";
	document.getElementById("praktisch").style.display = "none";
	document.getElementById("deskundigheid").style.display = "none";
	document.getElementById("vertrouwelijkheid").style.display = "none";
	document.getElementById("truiverwer").style.display = "none";
	document.getElementById("contact").style.display = "none";
	document.getElementById("links").style.display = "none";

	//document.getElementById("training").style.display = "none";

}

function MouseOverMenunosub(img) {
	fCancelTimer();

	Hideall();
	document.getElementById(img).appear();	
}

(function ($) {
    $(document).ready(function () {

        $('.js-toggle-menu').click(function () {
            $('#menuToggle').toggleClass('-open');
        });

        $('.js-open-submenu').click(function () {
            var $this = $(this);
            var submenu = $this.data('submenu');

            $('.submenu[data-submenu="' + submenu + '"]').toggle();
        })

    });
})(jQuery);

