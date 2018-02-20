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
