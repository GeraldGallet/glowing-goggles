import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Max(2026)
  @Min(1500)
  publishedYear: number;

  @IsString()
  authorId: string;
}

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsInt()
  @Max(2026)
  @Min(1500)
  @IsOptional()
  publishedYear?: number;

  @IsString()
  @IsOptional()
  authorId?: string;
}

export class GetBooksQueryDto {
  @IsOptional()
  @Type(() => Number)
  offset?: number;

  @IsOptional()
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @IsString()
  sort?: string;
}
