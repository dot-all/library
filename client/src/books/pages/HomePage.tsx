import { useEffect, useState } from 'react';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
    };
  };
}

interface BooksResponse {
  items: Book[];
}

export default function HomePage() {
  const [data, setData] = useState<Book[] | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY as string;
  const genre = "terror";
  const endPoint = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=10&key=${apiKey}`;

  async function fetchData() {
    try {
      const response = await fetch(endPoint);
      const data: BooksResponse = await response.json();
      console.log(data);

      setData(data.items);
    } catch (e) {
      console.error("Error:", e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>LIBRARY</h1>
      {data ? (
        data.map((book) => (
          <div key={book.id}>
            <p>{book.volumeInfo.title}</p>
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.volumeInfo.title}
              />
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
