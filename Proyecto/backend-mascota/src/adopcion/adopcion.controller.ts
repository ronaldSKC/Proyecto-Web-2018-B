import {Controller, Get, Res} from "@nestjs/common";
import { AdopcionService } from "./adopcion.service";

Controller('adopcion')
export class AdopcionController{
    constructor(private readonly _adopcionService: AdopcionService){

    }
    @Get('inicio')
    mostrarInicio(@Res() response){
        response.render('adoptarSolicitud')
    }
}
export interface Adopcion{
    idSolicitud : number;
    telefono : string;
    telefonoCelular : string;
    fechaSolicitud : string;
    estadoSolicitud : string;
}