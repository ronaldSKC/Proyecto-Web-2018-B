import { Module } from "@nestjs/common";
import { FundacionEntity } from "./fundacion.entity";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    FundacionEntity
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
export class FundacionModule{

}