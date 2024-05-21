import { IsString, isString } from "class-validator";

export class CreateUserDto {
  @IsString()
  id: string;
  @IsString()
  username: string;
  password: string;
}
