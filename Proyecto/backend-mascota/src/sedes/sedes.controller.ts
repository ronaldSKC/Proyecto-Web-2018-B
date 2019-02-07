import { Controller, Get, Param, Res, Post, Body, Delete, Req } from "@nestjs/common";
import { SedesService } from "./sedes.service";
import { SedesDto } from "./dto/sedes.dto";

@Controller('sede')

export class SedesController {
    constructor(
        private readonly _sedesSercio:SedesService
    ){}
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
    verPelicula(
        @Res() res
    ){
        res.render('crear-sede',{
            h1: "Crear"
        })
    }
    
    @Post('crear-sede')
    create(
        @Res() res,
        @Body() sedeCrear: SedesDto
    ) {
        this._sedesSercio.create(sedeCrear)
        res.redirect('')
    }

    @Delete('eliminar/:id')
    eliminarUno(
        @Req() req
    ) {
        return this._sedesSercio.delete(req.params.id);
    }

    @Post('editar/:id')
    editarUno(
        @Param('id') idEvento,
        @Body() eventoEditar: SedesDto
    ) {
        return this._sedesSercio.update(idEvento, eventoEditar);
    }
}
}