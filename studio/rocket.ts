import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";
import { Payload } from "./Payload";

export class Rocket {
   name:string;
   totalCapacityKg:number;
   cargoItems:Cargo[];
   astronauts:Astronaut[];

constructor(name:string,totalCapacityKg:number){
this.name=name;
this.totalCapacityKg=totalCapacityKg
}

sumMass(items:Payload[]):number{
let sum ;
items.forEach((e)=>{
    sum+=e.massKg
})
return sum
}

currentMassKg():number{
return this.sumMass(this.cargoItems)+this.sumMass(this.astronauts)    

}
canAdd(item:Payload):boolean{
    if(this.currentMassKg()+item.massKg<=this.totalCapacityKg){

        return true
    }
    return false
}
addCargo(cargo:Cargo):boolean{
    if(this.canAdd(cargo)===true){
        return true
    }else 
    return false
}
addAstronaut(astronaut:Astronaut):boolean{
    if(this.canAdd(astronaut)){
        return true
    }else
     return false
}
}