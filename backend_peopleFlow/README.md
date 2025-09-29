<img width="1536" height="1024" alt="ChatGPT Image 26 de set  de 2025, 10_11_17" src="https://github.com/user-attachments/assets/ac677baa-cf7b-4fe1-89da-765baca1a193" />
O **People Flow** é um sistema de gestão de Recursos Humanos desenvolvido com **NestJS**, **TypeScript** e **TypeORM**, aplicando conceitos de **modularização** e **entidades** para garantir organização, escalabilidade e manutenção eficiente do código.  

O uso do **TypeORM** possibilita a integração com bancos de dados relacionais de forma prática, assegurando mapeamento adequado das entidades e consistência nos processos de persistência de dados.  

## Objetivos
- Automatizar e centralizar processos de Recursos Humanos.  
- Garantir maior eficiência na gestão de colaboradores.  
- Reduzir falhas e otimizar a manutenção de dados internos.  

## Arquitetura
A aplicação utiliza a arquitetura modular do **NestJS**, permitindo separar responsabilidades de forma clara.  
As **entidades**, gerenciadas pelo **TypeORM**, representam as estruturas centrais do domínio e garantem integridade dos dados no sistema.  

### Módulos do Projeto
- **Cadastro**  
- **Funcionários**  
- **Autenticação**  

---

## Banco de Dados
O sistema utiliza um banco de dados **relacional** com o auxílio do **TypeORM**, que realiza o mapeamento objeto-relacional (ORM).  

As entidades são refletidas em tabelas conectadas por **chaves primárias** e **estrangeiras**, assegurando a integridade e a eficiência nas consultas e operações.  

> **Nota:** A estrutura do banco de dados relacional será detalhada com diagramas abaixo:

<img width="532" height="329" alt="image" src="https://github.com/user-attachments/assets/d07b784b-141e-47d0-bb15-252a8d36a1b5" />

---
