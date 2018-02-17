function saludar(nombre){
  return "Hola mundo soy "+nombre;
}

var nombre = "Evergara";
var resultado =saludar(nombre);

var etiqueta  = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML=resultado;


//VARIABLES Y TIPOS DE DATOS
var nombre:string = "Evergara";
var edad:number = 38;
var programado:boolean =true;
var langs:Array<string> = ["JAVA","PHP","javascript","GO"];

etiqueta.innerHTML=nombre + " "+ edad;
