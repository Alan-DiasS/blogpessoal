// import { IsNotEmpty } from 'class-validator';
// import {
//   Column,
//   Entity,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity({ name: 'tb_postagens' })
// export class Postagem {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @IsNotEmpty()
//   @Column({ length: 100, nullable: false })
//   titulo: string;

//   @IsNotEmpty()
//   @Column({ length: 1000, nullable: false })
//   texto: string;

//   @UpdateDateColumn()
//   date: Date;
// }
// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { IsNotEmpty } from 'class-validator';
// import { Tema } from '../../tema/entities/tema.entity';

// @Entity({ name: 'tb_postagens' })
// export class Postagem {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @IsNotEmpty()
//   @Column({ length: 255 })
//   titulo: string;

//   @IsNotEmpty()
//   @Column({ length: 1000 })
//   texto: string;

//   @ManyToOne(() => Tema, (tema) => tema.postagem, {
//     onDelete: 'CASCADE',
//   })
//   tema: Tema;
// }
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  @UpdateDateColumn()
  data: Date;

  // 🔗 RELACIONAMENTO COM TEMA
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;

  // 🔗 RELACIONAMENTO COM USUARIO
  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
