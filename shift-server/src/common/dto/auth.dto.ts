import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

class AuthDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: '"email" is required' })
  @IsEmail(
    {},
    { message: ({ value }) => `"${value}" is not a valid email address` },
  )
  username: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: '"password" is required' })
  password: string;
}

export { AuthDto };
