


import {Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import {Mascota, MascotaService} from "./mascota.service";
import {RazaEntity} from "../raza/raza.entity";
import {MascotaEntity} from "./mascota.entity";
import {FindManyOptions, Like} from "typeorm";
import {SedesEntity} from "../sedes/sedes.entity";
import {RazaService} from "../raza/raza.service";
import {SedesService} from "../sedes/sedes.service";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {UsuarioService} from "../usuario/usuario.service";

@Controller('mascota')
export class MascotaController {
    constructor(private readonly _mascotaService: MascotaService,
                private readonly _razaService: RazaService,
                private readonly _sedeService: SedesService,
                private readonly _usuarioService: UsuarioService
    ) {

    }

    @Get('inicio')
    async mascota(
        @Res() response,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
        @Query('busqueda') busqueda: string,
        @Session() sesion
    ) {

        console.log(sesion)
        if (sesion.rol === 'administrador') {

            let mensaje = undefined;
            let clase = undefined;

            let usuario: UsuarioEntity;

            usuario = await this._usuarioService.buscarPorId(sesion.idUsuario)

            let razasPerros: RazaEntity[]
            let razasGatos: RazaEntity[]
            let sedes: SedesEntity[]

            const consultaPerros: FindManyOptions<RazaEntity> = {
                where: [{
                    especie: 1
                }]
            }
            razasPerros = await this._razaService.obtenerRazasPorEspecie(consultaPerros)

            const consultaGatos: FindManyOptions<RazaEntity> = {
                where: [{
                    especie: 2
                }]
            }
            razasGatos = await this._razaService.obtenerRazasPorEspecie(consultaGatos)


            sedes = await this._sedeService.obtenerRol()


            if (accion && nombre) {
                switch (accion) {
                    case 'actualizar':
                        mensaje = `Registro ${nombre} actualizado`;
                        clase = 'alert alert-danger';
                        break;
                    case 'borrar':
                        mensaje = `Registro ${nombre} eliminado`;
                        clase = 'alert alert-info';
                        break;
                    case 'crear':
                        mensaje = `Registro ${nombre} creado`;
                        clase = 'alert alert-success';
                        break;
                }
            }

            let mascotas: MascotaEntity[];

            if (busqueda) {

                const consulta: FindManyOptions<MascotaEntity> = {
                    where: [
                        {
                            nombreMascota: Like(`%${busqueda}%`)
                        },
                        {
                            generoMascota: Like(`%${busqueda}%`)
                        },
                        {
                            //usuario: sesion.idUsuario,
                            edadMascota: Like(`%${busqueda}%`)
                        },
                        {
                            //usuario: sesion.idUsuario,
                            tamanioMascota: Like(`%${busqueda}%`)
                        },

                    ]
                };

                mascotas = await this._mascotaService.buscar(consulta);
            } else {

                /* const consulta: FindManyOptions<MascotaEntity> = {
                     where: [{usuario: sesion.idUsuario}]
                 }*/
                mascotas = await this._mascotaService.buscar();
            }


            response.render('lista-mascotas',
                {
                    arregloMascotas: mascotas,
                    mensaje: mensaje,
                    clase: clase,
                    usuario: usuario,
                    arregloRazasPerros: razasPerros,
                    arregloRazasGatos: razasGatos,
                    arregloSedes: sedes,
                })
        } else {
            response.redirect('/login')
        }

    }


    @Get('inicio-usuario')
    async mascotaUsuario(
        @Res() response,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
        @Query('busqueda') busqueda: string,
        @Session() sesion
    ) {

        console.log(sesion)
        if (sesion.rol === 'usuario') {

            let mensaje = undefined;
            let clase = undefined;

            let usuario: UsuarioEntity;

            usuario = await this._usuarioService.buscarPorId(sesion.idUsuario)

            let razasPerros: RazaEntity[]
            let razasGatos: RazaEntity[]
            let sedes: SedesEntity[]

            const consultaPerros: FindManyOptions<RazaEntity> = {
                where: [{
                    especie: 1
                }]
            }
            razasPerros = await this._razaService.obtenerRazasPorEspecie(consultaPerros)

            const consultaGatos: FindManyOptions<RazaEntity> = {
                where: [{
                    especie: 2
                }]
            }
            razasGatos = await this._razaService.obtenerRazasPorEspecie(consultaGatos)


            sedes = await this._sedeService.obtenerRol()


            if (accion && nombre) {
                switch (accion) {
                    case 'actualizar':
                        mensaje = `Registro ${nombre} actualizado`;
                        clase = 'alert alert-danger';
                        break;
                    case 'borrar':
                        mensaje = `Registro ${nombre} eliminado`;
                        clase = 'alert alert-info';
                        break;
                    case 'crear':
                        mensaje = `Registro ${nombre} creado`;
                        clase = 'alert alert-success';
                        break;
                }
            }

            let mascotas: MascotaEntity[];

            if (busqueda) {

                const consulta: FindManyOptions<MascotaEntity> = {
                    where: [
                        {
                            nombreMascota: Like(`%${busqueda}%`)
                        },
                        {
                            generoMascota: Like(`%${busqueda}%`)
                        },
                        {
                            //usuario: sesion.idUsuario,
                            edadMascota: Like(`%${busqueda}%`)
                        },
                        {
                            //usuario: sesion.idUsuario,
                            tamanioMascota: Like(`%${busqueda}%`)
                        },

                    ]
                };

                mascotas = await this._mascotaService.buscar(consulta);
            } else {

                /* const consulta: FindManyOptions<MascotaEntity> = {
                     where: [{usuario: sesion.idUsuario}]
                 }*/
                mascotas = await this._mascotaService.buscar();
            }


            response.render('lista-mascotas-usuario',
                {
                    arregloMascotas: mascotas,
                    mensaje: mensaje,
                    clase: clase,
                    usuario: usuario,
                    arregloRazasPerros: razasPerros,
                    arregloRazasGatos: razasGatos,
                    arregloSedes: sedes,
                })
        } else {
            response.redirect('/login')
        }

    }


    @Get('crear-mascota')
    async mostrarCrearMascota(
        @Res() response,
        @Session() sesion
    ) {
        if (sesion.rol === 'administrador') {
            let razas: RazaEntity[]
            let sedes: SedesEntity[]

            razas = await this._razaService.obtenerRaza()
            sedes = await this._sedeService.obtenerRol()

            response.render(
                'crear-mascota', {
                    arregloRazas: razas,
                    arregloSedes: sedes,
                }
            )
        } else {
            response.redirect('/login')
        }
    }

    @Post('crear-mascota')
    async metodoMascota(
        @Res() response,
        @Body() mascota: Mascota,
        @Session() sesion
    ) {
        await this._mascotaService.crearMascota(mascota)
        const parametrosConsulta = `?accion=crear&nombre=${mascota.nombreMascota}`;

        response.redirect('/mascota/inicio' + parametrosConsulta)
    }


    @Post('eliminar-mascota/:idMascota')
    async borrarEvento(
        @Param('idMascota') idMascota: string,
        @Res() response
    ) {
        const mascotaEncontrada = await this._mascotaService
            .buscarPorId(+idMascota);

        await this._mascotaService.borrar(Number(idMascota));

        const parametrosConsulta = `?accion=borrar&nombre=${mascotaEncontrada.nombreMascota}`;

        response.redirect('/mascota/inicio' + parametrosConsulta);
    }


    @Get('actualizar-mascota/:idMascota')
    async actualizarEvento(
        @Param('idMascota') idMascota: string,
        @Res() response,
        @Query('error') error: string,
        @Session() sesion
    ) {

        if (sesion.rol === 'administrador') {
            let mensaje = undefined;


            if (error) {
                mensaje = "Datos erroneos";
            }

            let razas: RazaEntity[]
            let sedes: SedesEntity[]

            razas = await this._razaService.obtenerRaza()
            sedes = await this._sedeService.obtenerRol()


            const mascotaActualizar = await this._mascotaService
                .buscarPorId(Number(idMascota));

            response.render(
                'crear-mascota', {//ir a la pantalla de crear-usuario
                    mascota: mascotaActualizar,
                    mensaje: mensaje,
                    idMascota: idMascota,
                    arregloRazas: razas,
                    arregloSedes: sedes,
                }
            )
        } else {
            response.redirect('/login')
        }

    }


    @Post('actualizar-mascota/:idMascota')
    async actualizarPacienteFormulario(
        @Param('idMascota') idMascota: string,
        @Res() response,
        @Body() mascota: Mascota
    ) {
        let mensaje = undefined;

        /*const objetoValidacionEvento = new CreateEventoDto();
        objetoValidacionEvento.nombreEvento = evento.nombreEvento
        const fec = new Date(evento.fechaEvento).toISOString();
        objetoValidacionEvento.fechaEvento = fec
        const errores: ValidationError[] =
            await validate(objetoValidacionEvento);
        const hayErrores = errores.length > 0;
        if (hayErrores) {
            console.error(errores);
            const parametrosConsulta = `?error=${errores[0].constraints}`;
            response.redirect('/evento/actualizar-evento/'+ idEvento + parametrosConsulta)
        } else {*/
        mascota.idMascota = +idMascota;

        await this._mascotaService.actualizar(mascota);

        const parametrosConsulta = `?accion=actualizar&nombre=${mascota.nombreMascota}`;

        response.redirect('/mascota/inicio' + parametrosConsulta);
    }


    @Get('ver-detalle-mascota/:idMascota')
    async mostrarDetalleMascota(
        @Res() response,
        @Param('idMascota') idMascota,
        @Session() sesion,
    ) {

        const mascota = await this._mascotaService.buscarPorIdDetalle(+idMascota);


        switch (sesion.rol) {
            case 'administrador':
                response.render('detalle-mascotas',
                    {mascota: mascota})
                break;
            case 'usuario':
                response.render('detalle-mascota-usuario',
                    {mascota: mascota})
                break;

            default:
                response.redirect('/login')

                break;
        }

    }
}
