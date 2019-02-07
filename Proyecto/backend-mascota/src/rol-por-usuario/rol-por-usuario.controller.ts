import {Controller} from "@nestjs/common";
import {RolPorUsuarioService} from "./rol-por-usuario.service";
import {UsuarioService} from "../usuario/usuario.service";
import {RolService} from "../rol/rol.service";

@Controller('rol-por-usuario')

export class RolPorUsuarioController {
    constructor(private readonly _rolPorUsuarioService: RolPorUsuarioService,
                private readonly _usuarioService: UsuarioService    ,
                private readonly _rolService: RolService
    ) {

    }
}