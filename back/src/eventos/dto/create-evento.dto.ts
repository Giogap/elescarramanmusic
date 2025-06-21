import {
  IsString,
  IsDate,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsArray,
} from 'class-validator';

export class CreateEventoDto {
  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsDate()
  fecha: Date;

  @IsString()
  lugar: string;

  @IsString()
  @IsOptional()
  imagen?: string;

  @IsBoolean()
  @IsOptional()
  esGratuito?: boolean;

  @IsNumber()
  @IsOptional()
  precio?: number;

  @IsArray()
  @IsOptional()
  bandaIds?: number[];
}
