import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  getBooks(): BookModel[] {
    return this.bookRepository.getBooks();
  }

  getBookById(bookId: string): BookModel | undefined {
    return this.bookRepository.getBookById(bookId);
  }

  createBook(input: CreateBookModel) {
    return this.bookRepository.createBook(input);
  }

  updateBook(id: string, input: UpdateBookModel) {
    return this.bookRepository.updateBook(id, input);
  }

  deleteBook(id: string) {
    return this.bookRepository.deleteBook(id);
  }
}
