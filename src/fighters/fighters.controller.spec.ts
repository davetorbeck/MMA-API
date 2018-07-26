import { Test, TestingModule } from '@nestjs/testing';
import { FightersController } from './fighters.controller';

describe('Fighters Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [FightersController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: FightersController = module.get<FightersController>(FightersController);
    expect(controller).toBeDefined();
  });
});
