import { Injectable } from "@nestjs/common";
import { Cat } from "src/Interfaces/cats.interfaces";
@Injectable()
export class CatsService{
    private readonly cats: Cat[] = []
    
    createCats(cat: Cat){
        return this.cats.push(cat);
    }

    findAllCats(){
        return this.cats;
    }
}