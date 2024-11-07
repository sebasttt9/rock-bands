import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RockbandService } from './rockband.service';
import { CreateRockbandDto } from './dto/create-rockband.dto';
import { UpdateRockbandDto } from './dto/update-rockband.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rockband')
@ApiTags("RockBands")
export class RockbandController {
  rockBands: any;
  constructor(private readonly rockbandService: RockbandService) {}

  @Post()
  create(@Body() createRockbandDto: CreateRockbandDto) {
    return this.rockbandService.create(createRockbandDto);
  }

  @Get()
  findAll() {
    return this.rockbandService.findAllBands();
  }

  @Get("Find one Band")
  findOneBand(){
    return this.rockBands.findAllBands
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rockbandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRockbandDto: UpdateRockbandDto) {
    return this.rockbandService.update(+id, updateRockbandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rockbandService.remove(+id);
  }
}
