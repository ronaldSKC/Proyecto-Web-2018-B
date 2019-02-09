import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";
import {RazaEntity} from "../raza/raza.entity";
import {SedesEntity} from "../sedes/sedes.entity";
import {Mascota} from "../mascota/mascota.service";
import {UsuarioEntity} from "./usuario.entity";
import {FindManyOptions, Like} from "typeorm";

@Controller('usuario')

export class UsuarioController {
    constructor(private readonly _usuarioService: UsuarioService,
                //private readonly _rolPorUsuarioServicio:RolPorUsuarioService
    ) {

    }


    @Get('inicio')
    async mostrarUsuario(
        @Res() res,
        @Session() sesion,
        @Query('accion') accion:string,
        @Query('nombre') nombre:string,
        @Query('busqueda') busqueda:string
    ){
        if(sesion.rol==='administrador') {
            let mensaje = undefined;
            console.log(sesion)

            if (accion && nombre) {
                switch (accion) {
                    case 'actualizar':
                        mensaje = `Rol al usuario ${nombre} actualizado`;
                        break;
                    case 'borrar':
                        mensaje = `Registro ${nombre} eliminado`;
                        break;
                }
            }

            let usuarios: UsuarioEntity[];

            if (busqueda) {

                const consulta: FindManyOptions<UsuarioEntity> = {
                    where: [
                        {
                            nickname: Like(`%${busqueda}%`)
                        },
                        {
                            emailUsuario: Like(`%${busqueda}%`)
                        },
                        {
                            nombreCompletoUsuario: Like(`%${busqueda}%`)
                        },

                    ]
                };

                usuarios = await this._usuarioService.buscar(consulta);
            } else {

                usuarios = await this._usuarioService.buscar();
            }

            res.render('lista-usuario',
                {
                    arregloUsuario: usuarios,
                    mensaje: mensaje,

                })
        }else{
            throw new BadRequestException({mensaje: "No tiene acceso a esta vista"});
        }
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


    @Post('borrar/:idUsuario')
    async borrar(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuarioEncontrado = await this._usuarioService
            .buscarPorId(+idUsuario);

        await this._usuarioService.borrar(Number(idUsuario));

        const parametrosConsulta = `?accion=borrar&nombre=${usuarioEncontrado.nickname}`;

        response.redirect('/usuario/inicio' + parametrosConsulta);
    }




}




