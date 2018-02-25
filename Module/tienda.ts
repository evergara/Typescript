module Tienda{
  export class Ropa{
    constructor(public titulo:string){
      alert('Tienda ropa: '+ titulo);
    }
  }
  export class Informatica{
    constructor(public titulo:string){
      alert('Tienda Informatica: '+titulo);
    }
  }
}
