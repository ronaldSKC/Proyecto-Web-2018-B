import { Controller } from "@nestjs/common";

@Controller('adopcion')
export class AdopcionController{

}
export interface Adopcion{
    idSolicitud : number;
    telefono : string;
    telefonoCelular : string;
    fechaSolicitud : string;
    estadoSolicitud : string;
}