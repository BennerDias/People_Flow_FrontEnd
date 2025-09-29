import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Cadastro } from '../entities/cadastro.entity';
import { CadastroService } from './../services/cadastro.service';

@Controller('/cadastros')
export class CadastroController {
  constructor(private readonly CadastroService: CadastroService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Cadastro[]> {
    return this.CadastroService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Cadastro> {
    return this.CadastroService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByName(@Param('nome') nome: string): Promise<Cadastro[]> {
    return this.CadastroService.findAllByName(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() cadastro: Cadastro): Promise<Cadastro> {
    return this.CadastroService.create(cadastro);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() cadastro: Cadastro): Promise<Cadastro> {
    return this.CadastroService.update(cadastro);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.CadastroService.delete(id);
  }
}
