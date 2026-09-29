import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class AuthorDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Max(2026)
  @Min(1500)
  publishedYear: number;

  @Type(() => AuthorDto)
  author: AuthorDto;
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

  @Type(() => AuthorDto)
  @IsOptional()
  author?: AuthorDto;
}
