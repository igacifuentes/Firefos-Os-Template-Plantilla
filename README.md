Firefos-Os-Template-Plantilla
=============================

Plantilla para desarrollar aplicaciones en Firefox Os ,donde se muestran las principales actividades respecto a la interfaz de usuario.

Nota:
El archivo app.html contiene el aplicativo con su interfaz grafica
El archivo js/app.js contiene los eventos de las secciones de la interfaz de usuario

Ejemplo

document.querySelector('#btn-buttons').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'current';                                                                                                           
  document.querySelector('[data-position="current"]').className = 'left';
});

--->  permite colocar el elemento con su interfaz correspondiente

document.querySelector('#btn-buttons-back').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'right';                    
  document.querySelector('[data-position="current"]').className = 'current';
});

 --->  Devuelve a la interfaz anterior
 
document.querySelector('.defecto').addEventListener ('click', function () {                                                              
	alert("Mensaje de Alerta");
});

--->  muestra un mensaje cuando se preciona el boton con el nombre defecto

El codigo fue tomado de  http://buildingfirefoxos.github.io/Building-Blocks/package/package.zip ,realizando algunas modificaciones.
