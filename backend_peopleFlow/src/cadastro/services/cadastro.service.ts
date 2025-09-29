import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cadastro } from '../entities/cadastro.entity';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class CadastroService {
  CadastroService: any;
  constructor(
    @InjectRepository(Cadastro)
    private readonly cadastroRepository: Repository<Cadastro>,
  ) {}

  async findAll(): Promise<Cadastro[]> {
    return await this.cadastroRepository.find();
  }

  async findById(id: number) {
    const cadastro = await this.cadastroRepository.findOne({
      where: {
        id,
      },
    });
    if (!cadastro)
      throw new HttpException('Cadastro não encontrado!', HttpStatus.NOT_FOUND);

    return cadastro;
  }

  async findAllByName(nome: string): Promise<Cadastro[]> {
    return await this.cadastroRepository.find({
      where: {
        nome: ILike(`%${nome}`),
      },
    });
  }

  async create(cadastro: Cadastro): Promise<Cadastro> {
    return this.cadastroRepository.save(cadastro);
  }

  async update(cadastro: Cadastro): Promise<Cadastro> {
    await this.findById(cadastro.id);

    return this.cadastroRepository.save(cadastro);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.cadastroRepository.delete(id);
  }
}
