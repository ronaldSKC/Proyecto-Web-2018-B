import { Controller, Get, Res, Post, Body } from "@nestjs/common";
import { AdopcionService } from "./adopcion.service";
import { async } from "rxjs/internal/scheduler/async";

@Controller('adopcion')
export class AdopcionController{
    constructor(private readonly _adopcionService: AdopcionService){

    }
    @Get('inicio')
    adopcion(){

    }
    @Get('crear-adopcion')
    crearAdopcionRuta(
        @Res() response 
    ){
        response
        .render(
            'crear-adopcion',
            {
                titulo: 'Crear noticia'
            })
    }
    @Post('crear-adopcion')
    async crearAdopcion(
        @Res() response,
        @Body() adopcion : Adopcion
    ){
        const respuesta = await this._adopcionService.crearAdopcion(adopcion);
        const parametrosConsulta = `?accion=crear&titulo=${adopcion.idSolicitud}`
        response.redirect('/adopcion/inicio'+parametrosConsulta)
    }
}
export interface Adopcion{
    idSolicitud : number;
    telefono : string;
    telefonoCelular : string;
    fechaSolicitud : string;
    estadoSolicitud : string;
}