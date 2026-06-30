import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  amount: number;
}
