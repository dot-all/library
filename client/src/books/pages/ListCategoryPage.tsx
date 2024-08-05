import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../ui/Navbar';
import { fetchBooks } from '../../api/api';
import { Book } from '../../types/book';
import BookCard from '../components/BookCard';
import SkeletonBookCard from '../components/SkeletonCard';

const ListCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const booksData = await fetchBooks(category!, apiKey);
        setBooks(booksData);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, apiKey]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  return (
    <>
      <Navbar />
      <main className="w-11/12 mx-auto mt-8">
        <button onClick={onNavigateBack} className='flex flex-row items-center text-orange-500 hover:text-orange-400'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mt-0 md:mt-1" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/>
          </svg>
          VOLVER
        </button>
        <h2 className="text-2xl font-medium text-orange-500 mt-8">Libros {category}</h2>
        {loading && (
          <ul className="mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <SkeletonBookCard />
              </li>
            ))}
          </ul>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <ul className="mt-4">
            {books.map((book, i) => (
              <li key={i}>
                <BookCard book={book} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}

export default ListCategoryPage;
