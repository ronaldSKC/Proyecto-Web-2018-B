import { IsNotEmpty, IsString, IsNumber, IsOptional, IsBooleanString, IsDateString } from "class-validator";
export class SedesDto{
    @IsOptional()
    idSedes?: number;
    @IsString()
    @IsNotEmpty()
    ciudad: string;
    @IsNotEmpty()
    @IsString()
    callePrincipal: string;
    @IsNotEmpty()
    @IsString()
    calleSecundaria: string;
    @IsNotEmpty()
    @IsString()
    referencia: string;

}