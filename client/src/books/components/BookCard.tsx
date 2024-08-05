import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../types/book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link
      to={`/book/${book.id}`}
      className="mt-8 flex flex-col md:flex-row items-start bg-gray-50 dark:bg-[#28292a] p-10 rounded-3xl"
    >
      <div className="mb-4 md:mb-0">
        {
          book.volumeInfo.imageLinks?.thumbnail ?
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
            alt={book.volumeInfo.title}
            className="w-40 h-56 rounded-lg overflow-hidden"
          />
          :
          <div className='w-40 h-56 rounded-lg flex items-center justify-center bg-gray-300'><p>{book.volumeInfo.title}</p></div>
        }
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-bold mb-2">{book.volumeInfo.title}</h2>
        <p className="text-lg text-gray-700 mb-2 dark:text-gray-300">Autor: {book.volumeInfo.authors.join(', ')}</p>
        <p className="text-gray-600 dark:text-gray-200">{book.searchInfo?.textSnippet || 'Descripción no disponible.'}</p>
      </div>
    </Link>
  );
};

export default BookCard;
