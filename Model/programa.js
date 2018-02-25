//import Tienda = require ('../Module/tienda');
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert('Tienda ropa: ' + titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda Informatica: ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var cargar_Informatica = new Informatica('Alem');
;
var Programa = /** @class */ (function () {
    function Programa() {
    }
    //CONTRUCTOR
    //Metodo Set
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    //Metodo Get
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    return Programa;
}());
var programa = new Programa();
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Metodo Set
    EditorVideo.prototype.setTimeline = function (timeLine) {
        this.timeLine = timeLine;
    };
    //Metodo Get
    EditorVideo.prototype.getTimeline = function () {
        return this.timeLine;
    };
    //metodos operativos
    EditorVideo.prototype.toString = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getDescripcion() + " - " + this.getTimeline();
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setDescripcion("Programa para editar musica");
editor.setTimeline(500000);
console.log("Programa: " + editor.toString());
//logica del formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById("ds_name").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("ds_name").value = "";
}
