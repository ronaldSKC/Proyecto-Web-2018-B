import { Controller, Get, Param, Res, Post, Body, Delete, Req, Query, Session } from "@nestjs/common";
import { SedesService } from "./sedes.service";
import { SedesDto } from "./dto/sedes.dto";
import { SedesEntity } from "./sedes.entity";
import { async } from "rxjs/internal/scheduler/async";
import { FindManyOptions, Like } from "typeorm";
import { MascotaEntity } from "src/mascota/mascota.entity";

@Controller('sede')

export class SedesController {
    constructor(
        private readonly _sedesSercio: SedesService
    ) { }
    @Get('buscar')
    findAll() {
        return this._sedesSercio.findAll();
    }

    @Get('buscarPorId/:id')
    findOne(
        @Param('id') id
    ) {
        return this._sedesSercio.findOne(id);
    }
    @Get('inicio')
    async ver(
        @Res() res,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
        @Query('busqueda') busqueda: string,
        @Session() sesion
    ) {
        let mensaje = undefined;
        console.log(sesion)
        let clase = undefined;

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
        let sedes: SedesEntity[]


        if (busqueda) {

            const consulta: FindManyOptions<SedesEntity> = {
                where: [
                    {
                        ciudad: Like(`%${busqueda}%`)
                    },
                    {
                        referencia: Like(`%${busqueda}%`)
                    },
                    {
                        //usuario: sesion.idUsuario,
                        calleSecundaria: Like(`%${busqueda}%`)
                    },
                    {
                        //usuario: sesion.idUsuario,
                        callePrincipal: Like(`%${busqueda}%`)
                    },

                ]
            };

            sedes = await this._sedesSercio.findAll(consulta)
        } else {

            sedes = await this._sedesSercio.findAll()
        }
        res.render('lista-sedes', {
            mensaje: mensaje,
            clase: clase,
            arregloSedes: sedes
        })
    } 
    
    @Get('crear-sede')
    verSede(
        @Res() res,
    ) {
        
        res.render('crear-sede')
    }

    @Post('crear-sede')
    async create(
        @Res() res,
        @Body() sedeCrear: SedesDto
    ) {
        await this._sedesSercio.create(sedeCrear)
        const parametrosConsulta = `?accion=crear&nombre=${sedeCrear.ciudad}`;
        res.redirect('/sede/inicio' +parametrosConsulta)
    }

    @Post('eliminar-sede/:idSedes')
    async eliminar(
        @Param('idSedes') idSedes: string,
        @Res() res
    ) {
        const sedeEncontrada = await this._sedesSercio
            .findOne(+idSedes);

        await this._sedesSercio.delete(Number(idSedes));

        const parametrosConsulta = `?accion=borrar&nombre=${sedeEncontrada.ciudad}`;

        res.redirect('/sede/inicio' + parametrosConsulta);
    }
    
    @Get('actualizar-sede/:idSedes')
    async actualizarEvento(
        @Param('idSedes') idSedes: string,
        @Res() response,
        @Query('error') error: string,
        @Session() sesion
    ) {
            let mensaje = undefined;
            if (error) {
                mensaje = "Datos erroneos";
            }
            const sedeActualizar = await this._sedesSercio
                .findOne(Number(idSedes));
            response.render(
                'crear-sede', {//ir a la pantalla de crear-usuario
                    sede: sedeActualizar,
                    mensaje: mensaje,
                    idSede: idSedes,
                }
            )
    }



    @Post('actualizar-sede/:idSedes')
    async actualizarPacienteFormulario(
        @Param('idSedes') idSedes: string,
        @Res() response,
        @Body() sede: SedesDto
    ) {
        let mensaje = undefined;

       
            sede.idSedes = +idSedes;

            await this._sedesSercio.update(sede);

            const parametrosConsulta = `?accion=actualizar&nombre=${sede.ciudad}`;

            response.redirect('/sede/inicio' + parametrosConsulta);
        }
}
