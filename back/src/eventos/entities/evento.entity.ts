import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Banda } from '../../bandas/entities/banda.entity';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column()
  fecha: Date;

  @Column()
  lugar: string;

  @Column({ nullable: true })
  imagen: string;

  @Column({ default: false })
  esGratuito: boolean;

  @Column({ nullable: true })
  precio: number;

  @ManyToMany(() => Banda, (banda) => banda.eventos)
  bandas: Banda[];
}
