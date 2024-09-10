import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WeighingsService } from './weighings.service';
import { Weighing } from '../entities/weighing.entity';

@Controller('weighings')
export class WeighingsController {
  constructor(private readonly weighingsService: WeighingsService) {}

  @Get()
  findAll(): Promise<Weighing[]> {
    return this.weighingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Weighing> {
    return this.weighingsService.findOne(id);
  }

  @Post()
  create(@Body() weighing: Weighing): Promise<Weighing> {
    return this.weighingsService.create(weighing);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() weighing: Weighing): Promise<Weighing> {
    return this.weighingsService.update(id, weighing);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.weighingsService.remove(id);
  }
}
