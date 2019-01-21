import { Module } from "@nestjs/common";
import { MascotaEntity } from "./mascota.entity";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    MascotaEntity
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
export class MascotaModule{

}