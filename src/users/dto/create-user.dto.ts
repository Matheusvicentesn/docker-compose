import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail(undefined, { message: 'O e-mail informado não é válido' })
  readonly email: string;

  @IsBoolean()
  readonly active: boolean;
}
