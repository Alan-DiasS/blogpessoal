import { Controller, Get } from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { Postagem } from './entities/postagem.entity';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  findAll(): Promise<Postagem[]> {
    return this.postagemService.getAll();
  }
}
