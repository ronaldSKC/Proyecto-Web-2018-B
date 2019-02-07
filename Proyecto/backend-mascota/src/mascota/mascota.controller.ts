import {Body, Controller, Get, Post, Res, Session} from "@nestjs/common";
import {Mascota, MascotaService} from "./mascota.service";
import {RazaEntity} from "../raza/raza.entity";

@Controller('mascota')
export class MascotaController {
    constructor(private readonly _mascotaService: MascotaService){

    }

    @Get('crear-mascota')
    mostrarCrearMascota(
        @Res() response
    ) {
        response.render(
            'crear-mascota'
        )
    }

    @Post('crear-mascota')
    metodoMascota(
        @Res() response,
        @Body() mascota:Mascota,
        @Session() sesion
    ){

    }


}

