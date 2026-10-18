import { useEffect, useState } from 'react';
import BooksList from './BooksList';
import useBookProvider from './useBookProvider';

function BooksPage() {
  const [newBookTitle, setNewBookTitle] = useState<string>('');
  const [newBookYear, setNewBookYear] = useState<string>('');
  const [newBookAuthorId, setNewBookAuthorId] = useState<string>('');

  const [books, onCreate, onUpdate, onDelete, loadBooks] = useBookProvider();

  useEffect(() => {
    loadBooks();
  }, []);

  const createBook = () => {
    onCreate({
      title: newBookTitle,
      publishedYear: parseInt(newBookYear, 10),
      authorId: newBookAuthorId,
    });
  };

  return (
    <>
      <input
        placeholder="title"
        value={newBookTitle}
        onChange={(e) => setNewBookTitle(e.target.value)}
      />
      <input
        placeholder="year"
        value={newBookYear}
        onChange={(e) => setNewBookYear(e.target.value)}
      />
      <input
        placeholder="authorId"
        value={newBookAuthorId}
        onChange={(e) => setNewBookAuthorId(e.target.value)}
      />
      <button onClick={createBook}>Create</button>
      <h2>Books</h2>
      <BooksList
        books={books}
        onDeleteBook={onDelete}
        onUpdateBook={onUpdate}
      />
    </>
  );
}

export default BooksPage;
