import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateBandaDto {
  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  genero?: string;

  @IsString()
  @IsOptional()
  imagen?: string;

  @IsArray()
  @IsOptional()
  eventoIds?: number[];
}
