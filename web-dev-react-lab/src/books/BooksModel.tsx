type AuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
};

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
