import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlocacaoDto {
    idAlocacao?: number;

    @IsString()
    @IsNotEmpty()
    diaSemana: string;  

    @IsString()
    @IsNotEmpty()
    horarioInicio: string; 

    @IsString()
    @IsNotEmpty()
    horarioFim: string; 

    @IsNumber()
    professorId: number;

    @IsNumber()
    disciplinaId: number;

    @IsNumber()
    salaId: number;

    @IsNumber()
    cursoId: number;

    @IsNumber()
    periodoId: number;
}