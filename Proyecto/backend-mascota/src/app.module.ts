import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AdopcionEntity } from './adopcion/adopcion.entity';
import {EspecieEntity} from './especie/especie.entity';
import { MascotaEntity } from './mascota/mascota.entity';
import { RazaEntity } from './raza/raza.entity';
import { RolEntity } from './rol/rol.entity';
import { RolPorUsuarioEntity } from './rol-por-usuario/rol-por-usuario.entity';
import { SedesEntity } from './sedes/sedes.entity';
import { UsuarioEntity } from './usuario/usuario.entity';
import {MascotaModule} from "./mascota/mascota.module";

import {UsuarioModule} from "./usuario/usuario.module";
import {RolPorUsuarioModule} from "./rol-por-usuario/rol-por-usuario.module";
import {RolModule} from "./rol/rol.module";
import {RazaModule} from "./raza/raza.module";
import {SedesModule} from "./sedes/sedes.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 32775,
        username: 'web',
        password: '12345678',
        database: 'bddweb',
        synchronize: true,
        dropSchema: false,
        entities: [
          AdopcionEntity,
          EspecieEntity,
          MascotaEntity,
          RazaEntity,
          RolEntity,
          RolPorUsuarioEntity,
          SedesEntity,
          UsuarioEntity
        ]

      }), MascotaModule, UsuarioModule, RolModule,RazaModule,SedesModule, RolPorUsuarioModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
