import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { Evento } from './entities/evento.entity';
import { Banda } from '../bandas/entities/banda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evento, Banda])],
  controllers: [EventosController],
  providers: [EventosService],
  exports: [EventosService],
})
export class EventosModule {}
