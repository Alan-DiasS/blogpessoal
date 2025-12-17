import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Postagem } from './entities/postagem.entity';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
  ) {}

  // 🔹 GET ALL (com Tema)
  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      relations: {
        tema: true,
      },
    });
  }

  // 🔹 GET BY ID (com Tema)
  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: { id },
      relations: {
        tema: true,
      },
    });

    if (!postagem) {
      throw new NotFoundException('Postagem não encontrada');
    }

    return postagem;
  }

  // 🔹 GET BY TITULO
  async findByTitulo(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      where: {
        titulo: Like(`%${titulo}%`),
      },
      relations: {
        tema: true,
      },
    });
  }

  // 🔹 CREATE
  async create(postagem: Postagem): Promise<Postagem> {
    return await this.postagemRepository.save(postagem);
  }

  // 🔹 UPDATE
  async update(postagem: Postagem): Promise<Postagem> {
    await this.findById(postagem.id);
    return await this.postagemRepository.save(postagem);
  }

  // 🔹 DELETE
  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.postagemRepository.delete(id);
  }
}
