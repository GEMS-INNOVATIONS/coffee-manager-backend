import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weighing } from '../entities/weighing.entity';

@Injectable()
export class WeighingsService {
  constructor(
    @InjectRepository(Weighing)
    private weighingsRepository: Repository<Weighing>,
  ) {}

  findAll(): Promise<Weighing[]> {
    return this.weighingsRepository.find();
  }

  findOne(id: number): Promise<Weighing> {
    return this.weighingsRepository.findOne({ where: { idWeighings: id } });
  }

  create(weighing: Weighing): Promise<Weighing> {
    return this.weighingsRepository.save(weighing);
  }

  async update(id: number, weighing: Weighing): Promise<Weighing> {
    await this.weighingsRepository.update(id, weighing);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.weighingsRepository.delete(id);
  }
}
