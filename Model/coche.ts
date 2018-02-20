interface ICocheBase{
   getModelo():string;
   getVelocidad():number;
}

class Coche implements ICocheBase{
  //Propiedades
  private color:string;
  private modelo:string;
  private velocidad:number;
  private velocidadMaxima:number;
  //CONTRUCTOR
  constructor(){
    this.color="";
    this.modelo="";
    this.velocidad=0;
    this.velocidadMaxima=150;
  }

  //Metodo Set
  public setColor(color:string){
    this.color = color;
  }

  public setVelocidad(velocidad:number){
    this.velocidad = velocidad;
  }

  public setVelocidadMaxima(velocidadMaxima:number){
    this.velocidadMaxima = velocidadMaxima;
  }

  public setModelo(modelo:string){
    this.modelo = modelo;
  }
  //Metodo Get
  public getColor():string{
    return this.color;
  }

  public getVelocidad():number{
    return this.velocidad;
  }

  public getVelocidadMaxima():number{
    return this.velocidadMaxima;
  }

  public getModelo():string{
    return this.modelo;
  }
  //Metodos operativos
  public acelerar(){
    if(this.controlVelocidad()){
        this.velocidad++;
    }
  }

  public frenar(){
    if(this.velocidad>0){
      this.velocidad--;
    }
  }

  private controlVelocidad():boolean{
    return (this.velocidadMaxima>this.velocidad);
  }
}

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
