import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Controller } from "swiper/modules";
import { Link } from "react-router-dom";
import { Book } from '../../types/book';

interface CarouselProps {
  data: Book[];
  id: string;
}

export const Carousel = ({
  data,
  id,
}: CarouselProps) => {
  return (
    <>
      <div className="swiper__container">
        <div
          className={`button__next-${id} swiper__button button__next`}
          id={id}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144M392 256H100"/></svg>
        </div>
        <div
          className={`button__prev-${id} swiper__button button__prev`}
          id={id}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
        </div>
        <Swiper
          className={`${id}`}
          id={id}
          modules={[Navigation, Controller]}
          navigation={{
            nextEl: `.button__next-${id}`,
            prevEl: `.button__prev-${id}`,
            disabledClass: "button__disabled",
          }}
          slidesPerGroup={8}
          slidesPerView={8}
          spaceBetween={7}
          speed={800}
          breakpoints={{
            320: {
              slidesPerView: 3.5,
              slidesPerGroup: 3,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 12,
            },
            640: {
              slidesPerGroup: 4,
              slidesPerView: 4,
              spaceBetween: 11,
              speed: 800,
            },
            768: {
              slidesPerGroup: 5,
              slidesPerView: 5,
              spaceBetween: 10,
              speed: 800,
            },
            900: {
              slidesPerGroup: 6,
              slidesPerView: 6,
              spaceBetween: 7,
              speed: 800,
            },
            1000: {
              slidesPerGroup: 8,
              slidesPerView: 8.2,
              spaceBetween: 7,
              speed: 800,
            },
          }}
        >
          {data.map((book: Book) => {
            return (
              <SwiperSlide key={book.id} className="swiper__slide transition-shadow duration-500 flex items-center justify-center dark:bg-[#202124] dark:text-white">
                <Link to={`book/${book.id}`} className="h-full flex flex-col items-center">
                  {book.volumeInfo.imageLinks ? (
                    <img
                      src={
                        book.volumeInfo.imageLinks.thumbnail ||
                        book.volumeInfo.imageLinks.smallThumbnail
                      }
                      alt={book.volumeInfo.title}
                      className="h-32 sm:h-48 md:h-56 xl:h-60 w-full"
                    />
                  ) : (
                    <div className="h-32 sm:h-48 md:h-56 xl:h-60 w-full flex items-center justify-center bg-gray-300 dark:bg-[#202124]">
                      <span className="text-center">{book.volumeInfo.title}</span>
                    </div>
                  )}
                  <h3 className="text-[12px] md:text-base mt-2 w-full bg-white dark:bg-[#202124]">{book.volumeInfo.title}</h3>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
