import { IsNotEmpty, IsString, IsNumber, IsOptional, IsBooleanString, IsDateString } from "class-validator";
export class RazaDto {
    @IsOptional()
    idRaza?: number;
    @IsString()
    @IsNotEmpty()
    nombreRaza: string;
    @IsNotEmpty()
    @IsNumber()
    especie?: any;
    @IsNotEmpty()
    @IsNumber()
    mascotas?: any;

}