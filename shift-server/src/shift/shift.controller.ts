import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Public } from 'src/decorators/SetMetaData';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Public()
  @Post()
  create(@Body() createShiftDto: CreateShiftDto) {
    return this.shiftService.create(createShiftDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.shiftService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shiftService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShiftDto: UpdateShiftDto) {
    return this.shiftService.update(+id, updateShiftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shiftService.remove(+id);
  }
}
