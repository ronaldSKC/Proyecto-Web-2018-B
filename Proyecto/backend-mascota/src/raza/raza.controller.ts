import {Controller, Get, Param, Res, Query, Session, Post, Body} from "@nestjs/common";
import {RazaService} from "./raza.service";
import { RazaEntity } from "./raza.entity";
import { FindManyOptions, Like } from "typeorm";
import { RazaDto } from "./dto/raza.dto";

@Controller('raza')

export class RazaController {
    constructor(private readonly _razaService:RazaService){
    }
    @Get('buscar')
    findAll() {
        return this._razaService.findAll();
    }

    @Get('buscarPorId/:id')
    findOne(
        @Param('id') id
    ) {
        return this._razaService.findOne(id);
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
        let razas: RazaEntity[]


        if (busqueda) {

            const consulta: FindManyOptions<RazaEntity> = {
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

            razas = await this._razaService.findAll(consulta)
        } else {

            razas = await this._razaService.findAll()
        }
        res.render('lista-raza', {
            mensaje: mensaje,
            clase: clase,
            arreglorazas: razas 
        })
    } 
    
    @Get('crear-raza')
    verraza(
        @Res() res,
    ) {
        
        res.render('crear-raza')
    }

    @Post('crear-raza')
    async create(
        @Res() res,
        @Body() razaCrear: RazaDto
    ) {
        await this._razaService.create(razaCrear)
        const parametrosConsulta = `?accion=crear&nombre=${razaCrear.nombreRaza}`;
        res.redirect('/raza/inicio' +parametrosConsulta)
    }

    @Post('eliminar-raza/:idRaza')
    async eliminar(
        @Param('idRaza') idRaza: string,
        @Res() res
    ) {
        const razaEncontrada = await this._razaService
            .findOne(+idRaza);

        await this._razaService.delete(Number(idRaza));

        const parametrosConsulta = `?accion=borrar&nombre=${razaEncontrada.nombreRaza}`;

        res.redirect('/raza/inicio' + parametrosConsulta);
    }
    
    @Get('actualizar-Raza/:idRaza')
    async actualizarEvento(
        @Param('idRaza') idRaza: string,
        @Res() response,
        @Query('error') error: string,
        @Session() sesion
    ) {
            let mensaje = undefined;
            if (error) {
                mensaje = "Datos erroneos";
            }
            const razaActualizar = await this._razaService
                .findOne(Number(idRaza));
            response.render(
                'crear-raza', {//ir a la pantalla de crear-usuario
                    raza: razaActualizar,
                    mensaje: mensaje,
                    idRaza: idRaza,
                }
            )
    }



    @Post('actualizar-raza/:idRaza')
    async actualizarPacienteFormulario(
        @Param('idRaza') idRaza: string,
        @Res() response,
        @Body() raza: RazaDto
    ) {
        let mensaje = undefined;

       
            raza.idRaza = +idRaza;

            await this._razaService.update(raza);

            const parametrosConsulta = `?accion=actualizar&nombre=${raza.nombreRaza}`;

            response.redirect('/raza/inicio' + parametrosConsulta);
        }
}

