import {Body, Controller, Get, Post, Query, Res, Session} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";
import {RazaEntity} from "../raza/raza.entity";
import {SedesEntity} from "../sedes/sedes.entity";
import {Mascota} from "../mascota/mascota.service";

@Controller('usuario')

export class UsuarioController {
    constructor(private readonly _usuarioService: UsuarioService,
                //private readonly _rolPorUsuarioServicio:RolPorUsuarioService
    ) {

    }


    @Get('crear-usuario')
    mostrarCrearUsuario(
        @Res() response,
        @Query('error') error,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
    ) {

        let mensaje = undefined;
        let clase = undefined;

        if (accion && nombre) {
            switch (accion) {
                case 'crear':
                    mensaje = `Registro ${nombre} creado`;
                    clase = 'alert alert-success';
                    break;
            }
        }
        response.render('registrar-usuario', {
            error: error,
            mensaje: mensaje,
            clase: clase})

    }


    @Post('crear-usuario')
    async metodoUsuario(
        @Res() response,
        @Body() usuario: Usuario,
    ) {
        await this._usuarioService.crear(usuario)
        const parametrosConsulta = `?accion=crear&nombre=${usuario.nickname}`;
        response.redirect('/usuario/crear-usuario' + parametrosConsulta)
    }




}




