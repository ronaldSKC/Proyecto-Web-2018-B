import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { MascotaSedeEntity } from "src/mascota-sede/mascotaSede.entity";
import { type } from "os";
import { FundacionEntity } from "src/fundacion/fundacion.entity";

@Entity('sedes')
export class SedesEntity{
    @PrimaryGeneratedColumn ()
    idSedes: number;

    @Column({
        name: 'calle_principal',
        type: 'varchar',
        length: 40
    })
    callePrincipal: string;

    @Column({
        name: 'calle_secundaria',
        type: 'varchar',
        length: 40
    })
    calleSecundaria: string;

    @Column(
        {
            name: 'referencia',
            type: 'varchar',
            length: 40
        }
    )
    referencia: string;

    @OneToMany(
        type => MascotaSedeEntity,
        mascotaSede => mascotaSede.sede)
    mascotasSedes: MascotaSedeEntity[]

    @ManyToOne(
        type => FundacionEntity,
        fundacion => fundacion.sedes)
    fundacion : FundacionEntity;
}
