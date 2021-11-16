import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Shift } from './entities/shift.entity';

const available_shifts: Array<Shift> = [{ id: 1, name: '232' }];
let currentIndex = 0;

@Injectable()
export class ShiftService {
  constructor(
    @InjectRepository(Shift)
    private shiftRepository: Repository<Shift>,
  ) {}
  create(createShiftDto: CreateShiftDto) {
    return this.shiftRepository.insert(createShiftDto);
  }

  findAll(): Promise<Shift[]> {
    return this.shiftRepository.find();
  }

  findOne(id: number): Promise<Shift> {
    return this.shiftRepository.findOne(id);
  }

  update(id: number, updateShiftDto: UpdateShiftDto) {
    return `This action updates a #${id} shift`;
  }

  remove(id: number) {
    return `This action removes a #${id} shift`;
  }

  getLastId() {
    return available_shifts[available_shifts.length - 1].id;
  }
}
