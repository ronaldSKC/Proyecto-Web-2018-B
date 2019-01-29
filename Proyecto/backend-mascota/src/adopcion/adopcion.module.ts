import { Module } from "@nestjs/common";
import { AdopcionEntity } from "./adopcion.entity";
import {TypeOrmModule} from '@nestjs/typeorm';
import { AdopcionController } from "./adopcion.controller";
import { AdopcionService } from "./adopcion.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    AdopcionEntity
                ]
            )
    ],
    controllers: [
        AdopcionController
    ],
    providers: [
        AdopcionService
    ],
    exports: [
        AdopcionService
    ]
})
export class AdopcionModule{

}