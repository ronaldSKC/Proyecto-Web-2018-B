import { Controller, Res, Get } from "@nestjs/common";
import { AdopcionService } from "./adopcion.service";

@Controller('adopcion')
export class AdopcionController{
    
    constructor(
        private readonly _adopcionservice:AdopcionService
        ){  }

    @Get('solicitud')
    solicitudAdopcion(
        @Res() response
    ){
        response.render('adoptarSolicitud')
}

}
export interface Adopcion{
    idSolicitud : number;
    telefono : string;
    telefonoCelular : string;
    fechaSolicitud : string;
    estadoSolicitud : boolean;
}