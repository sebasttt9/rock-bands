import { Test, TestingModule } from '@nestjs/testing';
import { RockbandService } from './rockband.service';

describe('RockbandService', () => {
  let service: RockbandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RockbandService],
    }).compile();

    service = module.get<RockbandService>(RockbandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
