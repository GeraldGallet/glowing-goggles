import BooksListItem from './BooksListItem';
import type { BookModel } from './BooksModel';

type BooksListProps = {
  books: BookModel[];
  onDeleteBook: (id: string) => void;
  onUpdateBook: (id: string, newTitle: string) => void;
};

function BooksList({ books, onDeleteBook, onUpdateBook }: BooksListProps) {
  return books.map((book: BookModel) => (
    <BooksListItem
      key={book.id}
      id={book.id}
      title={book.title}
      year={book.publishedYear}
      authorName={book.author.firstName + ' ' + book.author.lastName}
      onDelete={onDeleteBook}
      onUpdate={onUpdateBook}
    />
  ));
}

export default BooksList;
