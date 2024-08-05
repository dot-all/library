import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchBooks } from '../api/api';
import { Book } from '../types/book';

interface BooksContextType {
  horrorBooks: Book[] | null;
  fictionBooks: Book[] | null;
  romanceBooks: Book[] | null;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [horrorBooks, setHorrorBooks] = useState<Book[] | null>(null);
  const [fictionBooks, setFictionBooks] = useState<Book[] | null>(null);
  const [romanceBooks, setRomanceBooks] = useState<Book[] | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY as string;
  const genres = ["horror", "fiction+sci", "romance"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [horror, fiction, romance] = await Promise.all(
          genres.map((genre) => fetchBooks(genre, apiKey))
        );
        setHorrorBooks(horror);
        setFictionBooks(fiction);
        setRomanceBooks(romance);
      } catch (e) {
        console.error("Error:", e);
      }
    };

    fetchData();
  }, [apiKey]);

  return (
    <BooksContext.Provider value={{ horrorBooks, fictionBooks, romanceBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = React.useContext(BooksContext);
  if (context === undefined) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  return context;
};
