import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: number;

  @IsString()
  @IsEmail()
  email: string;
}
