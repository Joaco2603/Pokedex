import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @IsPositive()
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @IsPositive()
  offset?: number;
}
