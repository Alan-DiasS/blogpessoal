import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { Postagem } from './entities/postagem.entity';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  // 🔹 GET ALL
  @Get()
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  // 🔹 GET BY ID
  @Get('/:id')
  findById(@Param('id') id: number): Promise<Postagem> {
    return this.postagemService.findById(id);
  }

  // 🔹 GET BY TITULO
  @Get('/titulo/:titulo')
  findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.postagemService.findByTitulo(titulo);
  }

  // 🔹 CREATE
  @Post()
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
  }

  // 🔹 UPDATE
  @Put()
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.update(postagem);
  }

  // 🔹 DELETE
  @Delete('/:id')
  delete(@Param('id') id: number): Promise<void> {
    return this.postagemService.delete(id);
  }
}
