import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadastro } from './entities/cadastro.entity';
import { CadastroService } from './services/cadastro.service';
import { CadastroController } from './controllers/cadastro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cadastro])],
  providers: [CadastroService],
  controllers: [CadastroController],
  exports: [],
})
export class CadastroModule {}
