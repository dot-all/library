import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <header className="bg-orange-500 dark:bg-orange-600  sticky top-0 z-50">
      <section className="flex items-center h-16 text-white w-11/12 mx-auto justify-between">
      <Link to="/"><h1 className="text-xl mx-2 font-semibold">BOOKS</h1></Link>
      <ul className="flex items-center gap-4 text-sm md:text-base">
        <li>
          <Link to="/category">
            Categorías
          </Link>
        </li>
        <li>
          <Link to="/search" className="flex flex-row items-center justify-center">
            Buscar
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 ml-1 mt-1" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
          </Link>
        </li>
        <li><ThemeSwitch/></li>
      </ul>
      </section>
    </header>
  )
}
