import { Test, TestingModule } from '@nestjs/testing';
import { WeighingsController } from './weighings.controller';

describe('WeighingsController', () => {
  let controller: WeighingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeighingsController],
    }).compile();

    controller = module.get<WeighingsController>(WeighingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
