import axios from 'axios';
import { BooksResponse, Book } from '../types/book';

export const fetchBooks = async (genre: string, apiKey: string): Promise<Book[]> => {
  const endPoint = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&orderBy=relevance&maxResults=20&key=${apiKey}`;
  const response = await axios.get<BooksResponse>(endPoint);
  return response.data.items;
};

export const fetchBookById = async (id: string, apiKey: string): Promise<Book> => {
  const endPoint = `https://www.googleapis.com/books/v1/volumes?q=${id}&key=${apiKey}`;
  const response = await axios.get<{ items: Book[] }>(endPoint);
  if (response.data.items && response.data.items.length > 0) {
    return response.data.items[0];
  } else {
    throw new Error('No book found with this ISBN');
  }
};

export const searchBooks = async (query: string, apiKey: string): Promise<Book[]> => {
  const endPoint = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
  const response = await axios.get<BooksResponse>(endPoint);
  return response.data.items || [];
};