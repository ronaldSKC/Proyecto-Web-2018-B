import { Injectable } from "@nestjs/common";
import { AdopcionEntity } from "./adopcion.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm"

@Injectable()
export class AdopcionService{
    
    constructor(
        @InjectRepository(AdopcionEntity)
        private readonly _adopcionRepository: Repository<AdopcionEntity>
    ){
    }
   
}