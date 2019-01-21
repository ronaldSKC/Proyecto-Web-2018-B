import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { MascotaSedeEntity } from "src/mascota-sede/mascotaSede.entity";
import { type } from "os";
import { FundacionEntity } from "src/fundacion/fundacion.entity";

@Entity('sedes')
export class SedesEntity{
    @PrimaryGeneratedColumn ()
    idSedes: number;
    @Column()
    callePrincipal: string;
    @Column()
    calleSecundaria: string;
    @Column()
    referencia: string;
    @OneToMany(type => MascotaSedeEntity,
        mascotaSede => mascotaSede.idMascotaSede)
    mascotasSedes: MascotaSedeEntity[]
    @ManyToOne(type => FundacionEntity,
        fundacion => fundacion.idFundacion)
    fundacion : FundacionEntity;
}
