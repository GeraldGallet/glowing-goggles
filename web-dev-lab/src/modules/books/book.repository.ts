import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';

@Injectable()
export class BookRepository {
  private books: BookModel[] = [];

  getBooks(): BookModel[] {
    return this.books;
  }

  getBookById(bookId: string): BookModel | undefined {
    return this.books.find(({ id }) => id === bookId);
  }

  createBook(input: CreateBookModel) {
    this.books.push({ ...input, id: v4() });
  }

  updateBook(id: string, input: UpdateBookModel) {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...input,
        };
      } else {
        return book;
      }
    });
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
