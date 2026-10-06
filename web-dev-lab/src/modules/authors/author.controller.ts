import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  findAll(@Query('test') test: string) {
    console.log(test);
    return this.authorService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.authorService.findById(id);
  }

  @Post()
  create(@Body() author: CreateAuthorDto) {
    return this.authorService.create(author);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() author: UpdateAuthorDto) {
    return this.authorService.update(id, author);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.authorService.delete(id);
  }
}
