import { Module } from "@nestjs/common";
import { MascotaEntity } from "./mascota.entity";
import {TypeOrmModule} from '@nestjs/typeorm';
import {MascotaController} from "./mascota.controller";
import {MascotaService} from "./mascota.service";

@Module({
        imports: [
            TypeOrmModule.forFeature([MascotaEntity])],
        controllers: [MascotaController],
        providers: [MascotaService],
        exports: [MascotaService]
    }
)
export class MascotaModule{
}