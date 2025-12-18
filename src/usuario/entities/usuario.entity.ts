import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100, unique: true })
  usuario: string;

  @Column({ length: 255 })
  senha: string;

  @Column({ length: 255 })
  foto: string;

  @OneToMany(() => Postagem, (postagem) => postagem.usuario)
  postagem: Postagem[];
}
