import { Module } from "@nestjs/common";
import { AdopcionEntity } from "./adopcion.entity";
import {TypeOrmModule} from '@nestjs/typeorm';

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
        
    ],
    providers: [

    ],
    exports: [

    ]
})
export class AdopcionModule{

}