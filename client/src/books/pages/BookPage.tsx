import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBookById } from '../../api/api';
import { Book, IndustryIdentifier } from '../../types/book';
import Navbar from '../../ui/Navbar';
import Footer from '../../ui/Footer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const apiKey = import.meta.env.VITE_API_KEY as string;

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    const fetchBook = async () => {
      try {
        if (id) {
          const bookData = await fetchBookById(id, apiKey);
          setBook(bookData);
        }
      } catch (e) {
        console.error('Error fetching book:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, apiKey]);

  return (
    <>
      <Navbar />
      <main className='dark:bg-[#202124] py-8 min-h-screen'>
        <section className='w-11/12 mx-auto'>
        {loading ? (
          <div className="flex flex-col xl:flex-row mt-8 gap-10 w-full items-center">
            <Skeleton height={320} width={240} />
            <section className='flex flex-col w-full'>
              <Skeleton height={40} width={300} count={1} />
              <Skeleton height={20} width={200} count={3} />
              <Skeleton height={20} width={300} count={5} />
              <div className='grid grid-cols-3 w-full gap-4 text-sm'>
                <Skeleton height={20} width={100} />
                <Skeleton height={20} width={100} />
                <Skeleton height={20} width={100} />
                <Skeleton height={20} width={100} />
              </div>
            </section>
          </div>
        ) : (
          <>
            {book ? (
              <>
                <button onClick={onNavigateBack} className='flex flex-row items-center text-orange-500 hover:text-orange-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mt-0 md:mt-1" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/>
                  </svg>
                  VOLVER
                </button>
                <article className='flex flex-col xl:flex-row mt-8 gap-10 w-full items-center'>
                  {
                    book.volumeInfo.imageLinks ?
                    <img 
                    className='w-48 md:w-60 h-64 md:h-80 mb-0 xl:mb-auto overflow-hidden'
                    src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail} 
                    alt={`Portada de ${book.volumeInfo.title}`} 
                    title={`Portada de ${book.volumeInfo.title}`} />
                    :
                    <div className='w-48 md:w-56 h-64 md:h-80 mb-0 xl:mb-auto flex items-center justify-center bg-slate-300 dark:bg-[#2d2f31] rounded-2xl dark:text-white'>
                      <span className="text-center">{book.volumeInfo.title}</span>
                    </div>
                  }
                  <section className='flex flex-col w-full'>
                    <h2 className='text-2xl text-orange-500 font-medium'>{book.volumeInfo.title}</h2>
                    <div className='flex flex-row my-4'>
                      {book.volumeInfo.authors.map((author, i) => (
                        <React.Fragment key={i}>
                          <p className='text-sm'>{author}</p>
                          {i < book.volumeInfo.authors.length - 1 && <span className='text-sm'>, </span>}
                          {i === book.volumeInfo.authors.length - 1 && <span className='text-sm'>.</span>}
                        </React.Fragment>
                      ))}
                    </div>
                    {
                      book.volumeInfo.description ?
                      <p className='min-h-[20vh]'>{book.volumeInfo.description}</p>:
                      <p className='min-h-[20vh]'>Lamentablemente, no se ha encontrado una descripción disponible para este título en este momento. Por favor, vuelve a intentarlo más tarde o contacta con el soporte si necesitas más información.</p>
                    }
                    <hr className='my-4 w-full' />
                    <section className='grid grid-cols-3 w-full gap-4 text-sm'>
                      <div className='flex flex-col'>
                        <p className='font-medium'>Editorial</p>
                        <p>{book.volumeInfo.publisher}</p>
                      </div>
                      <div className='flex flex-col'>
                        <p className='font-medium'>Publicación</p>
                        <p>{new Date(book.volumeInfo.publishedDate).getFullYear()}</p>
                      </div>
                      <div className='flex flex-col'>
                        <p className='font-medium'>Idioma</p>
                        <p>{book.volumeInfo.language == "en" ? "Inglés" : "Español"}</p>
                      </div>
                      <div className='flex flex-col'>
                        <p className='font-medium'>ISBN</p>
                        <p>{book.volumeInfo.industryIdentifiers?.find((identifier: IndustryIdentifier) => identifier.type === 'ISBN_13')?.identifier}</p>
                      </div>
                    </section>
                  </section>
                </article>
              </>
            ) : (
              <section className='w-full h-[70vh] flex flex-col items-center justify-center dark:bg-[#202124]'>
                <h2 className='text-2xl md:text-3xl xl:text4xl text-center'>
                  ¡Vaya! Lamentablemente, no hemos podido encontrar el libro que estás buscando.
                </h2>
                <button onClick={onNavigateBack} className='flex flex-row items-center text-orange-500 hover:text-orange-400 mt-10 text-sm md:text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mt-0 md:mt-1" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/>
                  </svg>
                  REGRESAR
                </button>
              </section>
            )}
          </>
        )}
        </section>
      </main>
      <Footer />
    </>
  )
};

export default BookPage;
