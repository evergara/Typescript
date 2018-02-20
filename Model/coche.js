var Coche = /** @class */ (function () {
    //CONTRUCTOR
    function Coche() {
        this.color = "";
        this.modelo = "";
        this.velocidad = 0;
        this.velocidadMaxima = 150;
    }
    //Metodo Set
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.setVelocidadMaxima = function (velocidadMaxima) {
        this.velocidadMaxima = velocidadMaxima;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    //Metodo Get
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.getVelocidadMaxima = function () {
        return this.velocidadMaxima;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    //Metodos operativos
    Coche.prototype.acelerar = function () {
        if (this.controlVelocidad()) {
            this.velocidad++;
        }
    };
    Coche.prototype.frenar = function () {
        if (this.velocidad > 0) {
            this.velocidad--;
        }
    };
    Coche.prototype.controlVelocidad = function () {
        return (this.velocidadMaxima > this.velocidad);
    };
    return Coche;
}());
var coche = new Coche();
var coche1 = new Coche();
var coche2 = new Coche();
coche.setColor("Rojo");
coche.setVelocidad(147);
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
coche1.setColor("Azul");
coche2.setColor("Amarillo");
console.log("El color del coche es: " + coche.getColor());
console.log("La velocidad del coche es : " + coche.getVelocidad());
console.log("El color del coche1 es: " + coche1.getColor());
console.log("El color del coche2 es: " + coche2.getColor());
