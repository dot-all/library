import React from 'react';
import genres from "../../assets/data/genres.json";
import Navbar from '../../ui/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../ui/Footer';

const CategoryPage: React.FC = () => {
  return (
    <>
      <Navbar/>
      <main className="py-8 dark:bg-[#202124]">
        <section className='mx-auto w-11/12'>
        <h2 className='text-2xl text-orange-500 font-medium mb-4'>Categorías</h2>
        {genres.genres.map((genre) => (
          <div key={genre.name} className="mb-6">
            <h3 className="text-xl font-medium mb-2 text-orange-500">{genre.name}</h3>
            <ul className="pl-5">
              {genre.subcategories.length > 0 ? (
                genre.subcategories.map((subcategory) => (
                  <li key={subcategory} className="mb-1"><Link to={`/category/${subcategory}/list`}>{subcategory}</Link></li>
                ))
              ) : (
                <li className="text-gray-500">No subcategories</li>
              )}
            </ul>
          </div>
        ))}
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default CategoryPage;
