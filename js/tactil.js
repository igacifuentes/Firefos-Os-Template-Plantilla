
	$(function(){ 
    var cuerpo = $("#texto");

    function reiniciar()  { 
		cuerpo.html("Boton Reiniciar Presionado");
	};
	
	function swipeRight()  { 
		cuerpo.html("swipeRight Relizado");
	};
	
	function singleTap()  { 
		cuerpo.html("singleTap Relizado");
	};

    $("#boton").on('click',reiniciar);

	var tac = $('#cuerpo');
	
    tac.on('swipeRight',swipeRight);
    tac.on('swipeLeft', function() {cuerpo.html("swipeLeft Relizado");});
    tac.on('swipeUp',function() {cuerpo.html("swipeUp Relizado");});
    tac.on('swipeDown', function() {cuerpo.html("swipeDown Relizado");});
	tac.on('singleTap',singleTap);
    tac.on('Tap', function() {cuerpo.html("Tap Relizado");});
    tac.on('doubleTap', function() {cuerpo.html("doubleTap Relizado");});
    tac.on('longTap', function() {cuerpo.html("longTap Relizado");});
});
	
