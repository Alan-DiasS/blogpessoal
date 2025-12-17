import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255 })
  descricao: string;

  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];
}
