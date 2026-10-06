import { AuthorModel } from '../authors/author.model';

export type BookModel = {
  id: string;
  title: string;
  publishedYear: number;
  author: AuthorModel;
};

export type CreateBookModel = {
  title: string;
  publishedYear: number;
  authorId: string;
};

export type UpdateBookModel = Partial<CreateBookModel>;
