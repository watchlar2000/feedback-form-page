import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateFeedbackDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
