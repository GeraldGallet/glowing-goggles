import { useState } from 'react';
import type { BookModel, CreateBookModel } from './BooksModel';
import axios from 'axios';

function useBookProvider() {
  const [books, setBooks] = useState<BookModel[]>([]);

  const onCreate = async (newBook: CreateBookModel) => {
    await axios.post('http://localhost:3000/books', newBook);
    loadBooks();
  };

  const onUpdate = async (id: string, newTitle: string) => {
    await axios.patch(`http://localhost:3000/books/${id}`, { title: newTitle });
    loadBooks();
  };

  const onDelete = async (id: string) => {
    await axios.delete(`http://localhost:3000/books/${id}`);
    loadBooks();
  };

  const loadBooks = async () => {
    console.log('Loading books...');
    const result = await axios.get('http://localhost:3000/books');
    setBooks(result.data.data);
  };

  return [books, onCreate, onUpdate, onDelete, loadBooks] as const;
}

export default useBookProvider;
