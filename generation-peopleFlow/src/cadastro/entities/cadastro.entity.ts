import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_colaboradores' })
export class Cadastro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  nome: string;
  @Column({ length: 250 })
  funcao: string;
  @Column('decimal', { scale: 2, precision: 10 })
  salario: number;
  @Column('date')
  data_admissao: Date;
  @Column({ nullable: true, length: 5000 })
  foto_url?: string;
}
