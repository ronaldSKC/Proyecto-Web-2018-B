import { Module } from "@nestjs/common";
import { AdopcionEntity } from "./adopcion.entity";
import {TypeOrmModule} from '@nestjs/typeorm';
import { AdopcionController } from "./adopcion.controller";

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

    ],
    exports: [

    ]
})
export class AdopcionModule{

}