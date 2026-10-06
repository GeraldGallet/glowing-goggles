import { Injectable } from '@nestjs/common';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getBooks(
    offset?: number,
    limit?: number,
    sort?: string,
  ): Promise<[BookModel[], number]> {
    return this.bookRepository.getBooks(offset, limit, sort);
  }

  async getBookById(bookId: string): Promise<BookModel | null> {
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
