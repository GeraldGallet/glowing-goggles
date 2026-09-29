import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from './book.dto';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    return this.bookService.getBookById(id);
  }

  @Post()
  createBook(@Body() input: CreateBookDto) {
    return this.bookService.createBook(input);
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() input: UpdateBookDto) {
    return this.bookService.updateBook(id, input);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
