import { Injectable } from '@nestjs/common';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from '../database/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  private books: BookModel[] = [];

  async getBooks(
    offset?: number,
    limit?: number,
    sort?: string,
  ): Promise<[BookModel[], number]> {
    const [sortingField, sortingDirection] = sort?.split(',') ?? [
      'title',
      'asc',
    ];

    return this.bookRepository.findAndCount({
      skip: offset ?? 0,
      take: limit ?? 10,
      order: { [sortingField]: sortingDirection },
      relations: {
        author: true,
      },
    });
  }

  async getBookById(bookId: string): Promise<BookModel | null> {
    return this.bookRepository.findOne({
      where: { id: bookId },
      relations: {
        author: true,
      },
    });
  }

  async createBook(input: CreateBookModel) {
    const bookEntity = this.bookRepository.create(input);

    return this.bookRepository.save(bookEntity);
  }

  async updateBook(id: string, input: UpdateBookModel) {
    await this.bookRepository.update(id, input);
    return this.getBookById(id);
  }

  deleteBook(id: string) {
    return this.bookRepository.delete({ id });
  }
}
