import { Module } from "@nestjs/common";
import { EspecieEntity } from "./especie.entity";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    EspecieEntity
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
export class EspecieModule{

}