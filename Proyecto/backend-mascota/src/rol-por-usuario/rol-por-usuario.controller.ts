import {Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import {RolPorUsuario, RolPorUsuarioService} from "./rol-por-usuario.service";
import {UsuarioService} from "../usuario/usuario.service";
import {RolService} from "../rol/rol.service";
import {RolPorUsuarioEntity} from "./rol-por-usuario.entity";
import {RolEntity} from "../rol/rol.entity";

@Controller('rol-por-usuario')

export class RolPorUsuarioController {
    constructor(private readonly _rolPorUsuarioService: RolPorUsuarioService,
                private readonly _usuarioService: UsuarioService    ,
                private readonly _rolService: RolService
    ) {

    }

    @Get('asignar-rol/:idUsuario')
    async mostrarAsignarRol(
        @Res() response,
        @Param('idUsuario') idUsuario,
        @Query('notificacion') notificacion,
        @Session() sesion
    ){
        if(sesion.rol==='administrador') {

            let mensajeRolRepetido = undefined
            let usuarioRoles: RolPorUsuarioEntity[];
            let roles: RolEntity[];

            if (notificacion) {
                mensajeRolRepetido = `El rol ${notificacion} ya se encuentra asignado a este usuario`
            }
            const usuarioActualizar = await this._usuarioService.buscarPorId(+idUsuario)
            usuarioRoles = await this._rolPorUsuarioService.obtenerRoles(+idUsuario)
            roles = await this._rolService.obtenerRol()
            response.render('asignar-roles',
                {
                    usuario: usuarioActualizar,
                    rolUsuario: usuarioRoles,
                    rol: roles,
                    mensajeRol: mensajeRolRepetido,
                })
        }else{
            response.redirect('/login')
        }

    }


    @Post('borrar/:idRolUsuario')
    async borrar(
        @Param('idRolUsuario') idRolUsuario,
        @Res() response
    ) {
        const rolUsuarioEncontrado = await this._rolPorUsuarioService
            .buscarPorId(+idRolUsuario);
        console.log("sddddddddddddddddddddddddddddddddddddd"+ (rolUsuarioEncontrado) +idRolUsuario)

        await this._rolPorUsuarioService.borrar(Number(idRolUsuario));

        const parametrosConsulta = `?accion=borrar&nombre=${rolUsuarioEncontrado.idRolPorUsuario}`;

        response.redirect('/rol-por-usuario/asignar-rol/'+rolUsuarioEncontrado.usuario.idUsuario);
    }


    @Post('asignar-rol/:idUsuario')
    async metodoAsignarRol(
        @Res() response,
        @Param('idUsuario') idUsuario,
        @Body() rolPorUsuario:RolPorUsuario,
    ){

        console.log("hdsagggggggggg"+rolPorUsuario)

        let usuarioRoles: RolPorUsuarioEntity;
        usuarioRoles = await this._rolPorUsuarioService.encontrarRol(+idUsuario, +rolPorUsuario.rol)

        if(usuarioRoles){
            const parametrosConsulta = `?notificacion=${usuarioRoles.rol.nombreRol}`;
            response.redirect('/rol-por-usuario/asignar-rol/'+idUsuario+parametrosConsulta)
        }else{

            rolPorUsuario.usuario = idUsuario,
                await this._rolPorUsuarioService.crear(rolPorUsuario)
            //const parametrosConsulta = `?accion=crear&nombre=${rolPorUsuario.rol}`;
            response.redirect('/rol-por-usuario/asignar-rol/'+idUsuario)
        }}}
