import {Controller, Get, Res} from "@nestjs/common";
import {RazaService} from "../raza/raza.service";
import {AdopcionService} from "./adopcion.service";

@Controller('adopcion')
export class AdopcionController{
    constructor(private readonly _adopcionService:AdopcionService){
    }
    @Get('inicio')
    mostrarAdopcion(
        @Res() response,
    ){

        response.render('login')

    }


}



export interface Adopcion{
    idSolicitud : number;
    telefono : string;
    telefonoCelular : string;
    fechaSolicitud : string;
    estadoSolicitud : boolean;
}