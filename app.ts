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

//VARIABLES DE TIPO ANY(Permite meterle cualquier tipo de datos)
var detalle:any ="Inteligente";

etiqueta.innerHTML=nombre + " "+ edad + " "+detalle;
//DIFERENCIA ENTRE LET Y VAR

var a = 7;
var b = 12;

if(a==7){
  let a = 4;
  var b=1;
  console.log(`Dentro del IF: var a =${a} y b=${b}`);
}
console.log(`Fuera del IF: var a =${a} y b=${b}`);
//FUNCIONES Y TIPADOS
function DevolverNumbert(num:number):string{
  return num.toString();
}
console.log(DevolverNumbert(10));
//POO

//CLASES, PROPIEDADES Ó ATRIBUTOS Y METODOS

//El CONTRUCTOR DE LA CLASE

//VISIBILIDAD DE LAS PROPIEDADES

//PROPIEDADES PRIVADAS

//INTERFACES

//HERENCIA

//FUNCIONES DE FECHAS

//DECORADORES

//MODULOS
