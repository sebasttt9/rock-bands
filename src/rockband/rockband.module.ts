import { Module } from '@nestjs/common';
import { RockbandService } from './rockband.service';
import { RockbandController } from './rockband.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RockbandController],
  providers: [RockbandService],
  imports: [PrismaModule]
})
export class RockbandModule {}
