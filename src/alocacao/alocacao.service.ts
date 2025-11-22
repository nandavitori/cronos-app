import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';

@Injectable()
export class AlocacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAlocacaoDto) {
    return await this.prisma.alocacao.create({ data });
  }

  async findAll() {
    return await this.prisma.alocacao.findMany({
      include: {
        professor: true,
        disciplina: true,
        sala: true,
        curso: true,
        periodo: true,
      },
    });
  }

  async update(id: number, data: any) {
    const { id: idDescartavel, ...dadosLimpos } = data;

    const alocacaoExists = await this.prisma.alocacao.findUnique({
        where: { idAlocacao: id }
    });

    if (!alocacaoExists) throw new Error("Alocacao not found");

    return await this.prisma.alocacao.update({
        where: { idAlocacao: id },
        data: dadosLimpos,
    });
  }

  async delete(id: number) {
    const alocacaoExists = await this.prisma.alocacao.findUnique({
        where: { idAlocacao: id }
    });

    if (!alocacaoExists) throw new Error("Alocacao not found");

    return await this.prisma.alocacao.delete({
        where: { idAlocacao: id }
    });
  }
}