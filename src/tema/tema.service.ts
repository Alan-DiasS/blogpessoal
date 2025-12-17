import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Tema } from './entities/tema.entity';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>,
  ) {}

  findAll(): Promise<Tema[]> {
    return this.temaRepository.find({ relations: { postagem: true } });
  }

  async findById(id: number): Promise<Tema> {
    const tema = await this.temaRepository.findOne({
      where: { id },
      relations: { postagem: true },
    });

    if (!tema) throw new NotFoundException('Tema não encontrado');

    return tema;
  }

  findByDescricao(descricao: string): Promise<Tema[]> {
    return this.temaRepository.find({
      where: { descricao: ILike(`%${descricao}%`) },
      relations: { postagem: true },
    });
  }

  create(tema: Tema): Promise<Tema> {
    return this.temaRepository.save(tema);
  }

  update(tema: Tema): Promise<Tema> {
    return this.temaRepository.save(tema);
  }

  async delete(id: number): Promise<void> {
    const tema = await this.findById(id);
    await this.temaRepository.remove(tema);
  }
}
