import { Payload } from "./Payload";

export class Cargo implements Payload{
    massKg: number;
    material:string;
    constructor(massKg:number,material:string){
        this.massKg=massKg;
        this.material=material;
    }
    
}
let cargo = new Cargo(15,'tomato')
