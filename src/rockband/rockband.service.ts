import { Injectable } from '@nestjs/common';
import { CreateRockbandDto } from './dto/create-rockband.dto';
import { UpdateRockbandDto } from './dto/update-rockband.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RockbandService {
  constructor(private readonly prisma: PrismaService){}
  create(createRockbandDto: CreateRockbandDto) {
    return 'This action adds a new rockband';
  }

  findAllBands() {
    return this.prisma.rockBands.findMany({})
  }

  findOneBand(id: number){
    return this.prisma.rockBands.findMany({})
  }

  findOne(id: number) {
    return this.prisma.rockBands.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRockbandDto: UpdateRockbandDto) {
    return this.prisma.rockBands.update({
      where: {id},
      data: updateRockbandDto
    });
  }

  remove(id: number) {
    return this.prisma.rockBands.delete({
      where: {id}
    });
  }
}
