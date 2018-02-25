function arrancar(lanzar:string){
    return function(target:string){
      target.prototype.lanzamiento = function():void{
        alert(lanzar);
      }
    }
}
