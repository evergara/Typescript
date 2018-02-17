function saludar(nombre){
  return "Hola mundo soy "+nombre;
}

var nombre = "Evergara";

document.getElementById("container").innerHtml=saludar(nombre);
