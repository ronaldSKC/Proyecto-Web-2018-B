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
    
    @Get('crear-sede')
    async verSede(
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
        res.render('crear-sede', {

            mensaje: mensaje,
            clase: clase,
            arregloSedes: sedes
        })
    }

    @Post('crear-sede')
    create(
        @Res() res,
        @Body() sedeCrear: SedesDto
    ) {
        this._sedesSercio.create(sedeCrear)
        res.render('/crear-sede')
    }

    @Post('eliminar/:id')
    async eliminar(
        @Param() idSede: string,
        @Res() res
    ) {
        const sedeEncontrada = await this._sedesSercio
            .findOne(+idSede);

        await this._sedesSercio.delete(Number(idSede));

        const parametrosConsulta = `?accion=borrar&nombre=${sedeEncontrada.ciudad}`;

        res.redirect('/sede/crear-sede' + parametrosConsulta);
    }
    
    @Get('actualizar-sede/:idSede')
    async actualizarEvento(
        @Param('idSede') idSede: string,
        @Res() response,
        @Query('error') error: string,
        @Session() sesion
    ) {
            let mensaje = undefined;
            if (error) {
                mensaje = "Datos erroneos";
            }
            const sedeActualizar = await this._sedesSercio
                .findOne(Number(idSede));
            response.render(
                'crear-sede', {//ir a la pantalla de crear-usuario
                    sede: sedeActualizar,
                    mensaje: mensaje,
                    idSede: idSede,
                }
            )
    }



    @Post('actualizar-sede/:idSede')
    async actualizarPacienteFormulario(
        @Param('idSede') idSede: string,
        @Res() response,
        @Body() sede: SedesDto
    ) {
        let mensaje = undefined;

       
            sede.idSedes = +idSede;

            await this._sedesSercio.update(sede);

            const parametrosConsulta = `?accion=actualizar&nombre=${sede.ciudad}`;

            response.redirect('/sede/crear-sede' + parametrosConsulta);
        }
}
