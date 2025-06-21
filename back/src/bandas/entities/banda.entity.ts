import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Evento } from '../../eventos/entities/evento.entity';

@Entity()
export class Banda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  genero: string;

  @Column({ nullable: true })
  imagen: string;

  @ManyToMany(() => Evento, (evento) => evento.bandas)
  @JoinTable({
    name: 'banda_evento',
    joinColumn: {
      name: 'banda_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'evento_id',
      referencedColumnName: 'id',
    },
  })
  eventos: Evento[];
}
