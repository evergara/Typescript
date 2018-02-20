class Programa{
    //Propiedades
  protected nombre:string;
  protected version:number;
  protected descripcion:string;

//CONTRUCTOR
//Metodo Set
  public setNombre(nombre:string){
    this.nombre=nombre;
  }
  public setVersion(version:number){
    this.version=version;
  }
  public setDescripcion(descripcion:string){
    this.descripcion=descripcion;
  }

  //Metodo Get
  public getNombre():string{
    return this.nombre;
  }
  public getVersion():number{
    return this.version;
  }
  public getDescripcion():string{
    return this.descripcion;
  }
}


class EditorVideo extends  Programa{
  private timeLine:number;
  //Metodo Set
  public setTimeline(timeLine:number){
    this.timeLine=timeLine;
  }
  //Metodo Get
  public getTimeline():number{
    return this.timeLine;
  }
  //metodos operativos
  public toString():string{
    return this.getNombre()+" - "+this.getVersion()+" - "+ this.getDescripcion()+" - "+this.getTimeline();
  }
}


var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setDescripcion("Programa para editar musica");
editor.setTimeline(500000);

console.log("Programa: " + editor.toString());
