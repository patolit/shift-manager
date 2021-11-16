import { ApiProperty } from '@nestjs/swagger';

export class User {
  /**
   * The user
   */
  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: false })
  password: string;
}

