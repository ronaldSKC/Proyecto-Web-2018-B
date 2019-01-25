import { Module } from "@nestjs/common";
import { Tipo_mascotaEntity } from "./tipo_mascota.entity";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    Tipo_mascotaEntity
                ]
            )
    ],
    controllers: [
        
    ],
    providers: [

    ],
    exports: [

    ]
})
export class TipoMascotaModule{

}