import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBandaDto } from './dto/create-banda.dto';
import { UpdateBandaDto } from './dto/update-banda.dto';
import { Banda } from './entities/banda.entity';
import { Evento } from '../eventos/entities/evento.entity';

@Injectable()
export class BandasService {
  constructor(
    @InjectRepository(Banda)
    private readonly bandaRepository: Repository<Banda>,
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  async create(createBandaDto: CreateBandaDto): Promise<Banda> {
    const banda = this.bandaRepository.create(createBandaDto);

    if (createBandaDto.eventoIds && createBandaDto.eventoIds.length > 0) {
      const eventos = await this.eventoRepository.findByIds(
        createBandaDto.eventoIds,
      );
      banda.eventos = eventos;
    }

    return this.bandaRepository.save(banda);
  }

  async findAll(): Promise<Banda[]> {
    return this.bandaRepository.find({
      relations: ['eventos'],
    });
  }

  async findOne(id: number): Promise<Banda> {
    const banda = await this.bandaRepository.findOne({
      where: { id },
      relations: ['eventos'],
    });

    if (!banda) {
      throw new NotFoundException(`Banda con ID ${id} no encontrada`);
    }

    return banda;
  }

  async update(id: number, updateBandaDto: UpdateBandaDto): Promise<Banda> {
    const banda = await this.findOne(id);

    if (updateBandaDto.eventoIds) {
      const eventos = await this.eventoRepository.findByIds(
        updateBandaDto.eventoIds,
      );
      banda.eventos = eventos;
    }

    Object.assign(banda, updateBandaDto);
    return this.bandaRepository.save(banda);
  }

  async remove(id: number): Promise<void> {
    const banda = await this.findOne(id);
    await this.bandaRepository.remove(banda);
  }
}
