import { Controller, Get, Res } from "@nestjs/common";
import { AdopcionService } from "./adopcion.service";

@Controller('adopcion')
export class AdopcionController{
    constructor(private readonly _adopcionservice:AdopcionService){}
}

export interface Adopcion{
    idSolicitud : number;
    telefono : string;
    telefonoCelular : string;
    fechaSolicitud : string;
    estadoSolicitud : string;
}