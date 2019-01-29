import {Controller, Get, Res} from "@nestjs/common";
import {MascotaService} from "./mascota.service";

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




}
