import {Controller} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Controller('usuario')

export class UsuarioController {
    constructor(private readonly _usuarioService: UsuarioService,
                //private readonly _rolPorUsuarioServicio:RolPorUsuarioService
    ) {

    }













}