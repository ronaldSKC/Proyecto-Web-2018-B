import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AdopcionEntity } from './adopcion/adopcion.entity';
import {EspecieEntity} from './especie/especie.entity';
import { FundacionEntity } from './fundacion/fundacion.entity';
import { MascotaEntity } from './mascota/mascota.entity';
import { MascotaSedeEntity } from './mascota-sede/mascotaSede.entity';
import { RazaEntity } from './raza/raza.entity';
import { RolEntity } from './rol/rol.entity';
import { RolPorUsuarioEntity } from './rol-por-usuario/rolPorUsuario.entity';
import { SedesEntity } from './sedes/sedes.entity';
import { TipoUsuarioEntity } from './tipo-usuario/tipoUsuario.entity';
import { UsuarioEntity } from './usuario/usuario.entity';
import {MascotaModule} from "./mascota/mascota.module";
@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 32771,
        username: 'web',
        password: '12345678',
        database: 'bddweb',
        synchronize: true,
        dropSchema: false,
        entities: [
          AdopcionEntity,
          EspecieEntity,
          FundacionEntity,
          MascotaEntity,
          MascotaSedeEntity,
          RazaEntity,
          RolEntity,
          RolPorUsuarioEntity,
          SedesEntity,
          TipoUsuarioEntity,
          UsuarioEntity
        ]
      }), MascotaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
