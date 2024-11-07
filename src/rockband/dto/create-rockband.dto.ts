import { ApiProperty } from "@nestjs/swagger";

export class CreateRockbandDto {
    @ApiProperty()
    name : string;

    @ApiProperty({ required: false })
    members : string;

    @ApiProperty()
    cityoffoundation : string;

    @ApiProperty()
    tour : string;

    @ApiProperty({ default: false })
    bestsellingalbum : string;
}
