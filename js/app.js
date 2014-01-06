// Botones ------------------------------------
document.querySelector('#btn-buttons').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons-back').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});
document.querySelector('.defecto').addEventListener ('click', function () {
  
	alert("Mensaje de Alerta");
});
document.querySelector('.recommend').addEventListener ('click', function () {

	utils.status.show('Mensaje de alerta');    
});
document.querySelector('.danger').addEventListener ('click', function () {
  // Permite Devolver al Inicio
  document.querySelector('#buttons').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});
// ----------------------------------------------

//Menu de Accion
document.querySelector('#btn-action-menu').addEventListener ('click', function () {
  document.querySelector('#action-menu').className = 'fade-in';
});
document.querySelector('#action-menu').addEventListener ('click', function () {
  this.className = 'fade-out';
});
document.querySelector('.action1').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	utils.status.show('Accion 1 Realizada');    
});
document.querySelector('.action3').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	utils.status.show('Accion 3 Realizada');    
});

// ----------------------------------------------

//confirmacion
document.querySelector('.confirmacion').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	document.querySelector('#confirm').className = 'fade-in';
});
document.querySelector('#confirm').addEventListener ('click', function () {
  this.className = 'fade-out';
});
document.querySelector('#accion').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	utils.status.show('Accion  Realizada');    
});

// ----------------------------------------------

//lists
document.querySelector('#btn-lists').addEventListener ('click', function () {
  document.querySelector('#lists').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-lists-back').addEventListener ('click', function () {
  document.querySelector('#lists').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

// ----------------------------------------------
// Nuevo

document.querySelector('.nuevo').addEventListener ('click', function () {
  document.querySelector('#toolbars').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-toolbars-back').addEventListener ('click', function () {
  document.querySelector('#toolbars').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});
document.querySelector('#borrar').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	alert("borrar");
});
document.querySelector('#bandera').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	alert("bandera");
});
document.querySelector('#enviado').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	alert("enviado");
});
document.querySelector('#leido').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	alert("leido");
});
document.querySelector('#compartir').addEventListener ('click', function () {
  // Permite Devolver al Inicio
	alert("compartir");
});
