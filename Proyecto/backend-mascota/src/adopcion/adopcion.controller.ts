
import {Controller, Get, Param, Post, Res, Session} from "@nestjs/common";
import {RazaService} from "../raza/raza.service";
import {AdopcionService} from "./adopcion.service";
import {MascotaService} from "../mascota/mascota.service";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {UsuarioService} from "../usuario/usuario.service";
import {MascotaEntity} from "../mascota/mascota.entity";

Controller('adopcion')
export class AdopcionController{

    constructor(private readonly _adopcionService:AdopcionService,
                private readonly _usuarioService: UsuarioService,){
    }

    @Get('inicio')
    mostrarAdopcion(
        @Res() response,
    ){

        response.render('login')

    }


    @Get('solicitar-adopcion/idMascota')
  async  mostrarSolicitud(
        @Res() response,
        @Param('idMascota') idMascota,
        @Session() sesion
    ){

        let usuario: UsuarioEntity;
        usuario = await this._usuarioService.buscarPorId(sesion.idUsuario)


        response.render(
            'crear-solicitud', {
                //mascota: mascota,
                usuario: usuario
            })}






    }
    @Get('inicio')
    mostrarInicio(@Res() response){
        response.render('adoptarSolicitud')
    }
}





export interface Adopcion {
    idSolicitud: number;
    telefono: string;
    telefonoCelular: string;
    fechaSolicitud: string;
    estadoSolicitud: boolean;
}