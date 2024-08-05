import React, { useState } from 'react';
import Navbar from '../../ui/Navbar';
import { searchBooks } from '../../api/api';
import { Book, IndustryIdentifier } from '../../types/book';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY as string;

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const books = await searchBooks(searchTerm, apiKey);
      if (books.length > 0) {
        setBook(books[0]);
        setError(null);
      } else {
        setError('No se encontró ningún libro con esta búsqueda.');
        setBook(null);
      }
    } catch (err) {
      setError('Ocurrió un error al buscar el libro.');
      setBook(null);
    }
  };

  return (
    <>
      <Navbar />
      <main className="w-11/12 mx-auto mt-8">
        <h2 className="text-2xl font-medium mb-4 text-orange-500">Buscar Libro</h2>
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row md:w-1/2"
        >
          <input
            type="text"
            placeholder="Buscar por título, autor o ISBN"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 md:mb-0 w-full mr-auto"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-400 transition-colors"
          >
            Buscar
          </button>
        </form>
        {error && (
          <p className="mt-8 text-red-500">{error}</p>
        )}
        {book && (
          <BookCard book={book} />
        )}
      </main>
    </>
  );
}
