import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { Banda } from '../bandas/entities/banda.entity';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
    @InjectRepository(Banda)
    private readonly bandaRepository: Repository<Banda>,
  ) {}

  async create(createEventoDto: CreateEventoDto): Promise<Evento> {
    const evento = this.eventoRepository.create(createEventoDto);

    if (createEventoDto.bandaIds && createEventoDto.bandaIds.length > 0) {
      const bandas = await this.bandaRepository.findByIds(
        createEventoDto.bandaIds,
      );
      evento.bandas = bandas;
    }

    return this.eventoRepository.save(evento);
  }

  async findAll(): Promise<Evento[]> {
    return this.eventoRepository.find({
      relations: ['bandas'],
    });
  }

  async findOne(id: number): Promise<Evento> {
    const evento = await this.eventoRepository.findOne({
      where: { id },
      relations: ['bandas'],
    });

    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }

    return evento;
  }

  async update(id: number, updateEventoDto: UpdateEventoDto): Promise<Evento> {
    const evento = await this.findOne(id);

    if (updateEventoDto.bandaIds) {
      const bandas = await this.bandaRepository.findByIds(
        updateEventoDto.bandaIds,
      );
      evento.bandas = bandas;
    }

    Object.assign(evento, updateEventoDto);
    return this.eventoRepository.save(evento);
  }

  async remove(id: number): Promise<void> {
    const evento = await this.findOne(id);
    await this.eventoRepository.remove(evento);
  }
}
