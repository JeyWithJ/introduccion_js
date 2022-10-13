var nombre="Juan";
var apellido ="Henao"
var edad=25;
var pregunta = true;
var cumpleanios = new Date (1997,2,11);
function libro (titulo, autor, fecha, url){
    this.titulo= titulo;
    this.autor = autor;
    this.fecha = fecha;
    this.url = url;
}
var pasatiempos = new Array(3);

function miActividadFavorita(jugar) {
    var favorite ='Jugar';
    return favorite;
}