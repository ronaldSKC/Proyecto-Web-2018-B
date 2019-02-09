import {Controller} from "@nestjs/common";
import {SedesService} from "./sedes.service";


@Controller('sede')

export class SedesController {
    constructor(private readonly _sedeService: SedesService,
    ) {

    }
}