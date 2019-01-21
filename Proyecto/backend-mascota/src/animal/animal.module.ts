import { Module } from "@nestjs/common";
import { AnimalEntity } from "./animal.entity";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    AnimalEntity
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
export class AnimalModule{

}