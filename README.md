Firefos-Os-Template-Plantilla
=============================

Plantilla para desarrollar aplicaciones en Firefox Os ,donde se muestran las principales actividades respecto a la interfaz de usuario.

Nota:
El archivo app.html contiene el aplicativo
El archivo js/app.js contiene los eventos de las secciones de la interfaz de usuario

Ejemplo
                    "id o clase del Elemento" -> 
                              |
                              v
document.querySelector('#btn-buttons').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'current';                         permite colocar el elemento con su                                                                                  --->  interfaz correspondiente
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons-back').addEventListener ('click', function () {
  document.querySelector('#buttons').className = 'right';                     --->  Devuelve a la interfaz anterior
  document.querySelector('[data-position="current"]').className = 'current';
});


document.querySelector('.defecto').addEventListener ('click', function () {     --->  muestra un mensaje cuando se                                                                                              preciona el boton con el nombre                                                                                           defecto
	alert("Mensaje de Alerta");
});


El codigo fue tomado de  http://buildingfirefoxos.github.io/Building-Blocks/package/package.zip ,realizando algunas modificaciones.
