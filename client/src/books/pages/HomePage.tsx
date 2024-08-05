import { useBooks } from '../../contexts/BooksContext';
import Navbar from '../../ui/Navbar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Carousel } from '../components/Carousel';
import { Book } from '../../types/book';
import Footer from '../../ui/Footer';

export default function HomePage() {
  const { horrorBooks, fictionBooks, romanceBooks } = useBooks();

  const skeletonSlides = Array.from({ length: 8 }).map((_, index) => (
    <div key={index} className="flex flex-col items-center justify-center mx-2 my-1">
      <div className="h-32 w-24 sm:h-40 sm:w-28 md:h-48 md:w-36 lg:h-56 lg:w-40">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="mt-2 w-24 sm:w-28 md:w-36 lg:w-40">
        <Skeleton className="h-5 w-full" />
      </div>
    </div>
  ));

  const renderCarousel = (title: string, data: Book[] | null, id: string) => (
    <>
      <h2 className='pb-4 pt-8 text-xl md:text-xl text-orange-500 font-medium'>{title}</h2>
      {data ? (
        <Carousel data={data} id={id} />
      ) : (
        <div className="swiper__container">
          <div className="flex flex-row">{skeletonSlides}</div>
        </div>
      )}
    </>
  );

  return (
    <>
      <Navbar />
      <main className='dark:bg-[#202124]'>
        <section className='w-11/12 mx-auto'>
        {renderCarousel('Sumérgete en el Miedo', horrorBooks, 'horror_carousel')}
        {renderCarousel('Historias que Desafían la Realidad', fictionBooks, 'fiction_carousel')}
        {renderCarousel('Relatos Románticos', romanceBooks, 'romance_carousel')}
        </section>
      </main>
      <Footer/>
    </>
  );
}
