import { PartialType } from '@nestjs/mapped-types';
import { CreateRockbandDto } from './create-rockband.dto';

export class UpdateRockbandDto extends PartialType(CreateRockbandDto) {}
