import { Test, TestingModule } from '@nestjs/testing';
import { FightersService } from './fighters.service';

describe('FightersService', () => {
  let service: FightersService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FightersService],
    }).compile();
    service = module.get<FightersService>(FightersService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
