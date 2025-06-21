import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BandasService } from './bandas.service';
import { BandasController } from './bandas.controller';
import { Banda } from './entities/banda.entity';
import { Evento } from '../eventos/entities/evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Banda, Evento])],
  controllers: [BandasController],
  providers: [BandasService],
  exports: [BandasService],
})
export class BandasModule {}
