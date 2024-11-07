import { Test, TestingModule } from '@nestjs/testing';
import { RockbandController } from './rockband.controller';
import { RockbandService } from './rockband.service';

describe('RockbandController', () => {
  let controller: RockbandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RockbandController],
      providers: [RockbandService],
    }).compile();

    controller = module.get<RockbandController>(RockbandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
