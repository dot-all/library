import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import Search from "../pages/SearchPage";
import CategoryPage from "../pages/CategoryPage";
import ListCategoryPage from "../pages/ListCategoryPage";

export default function BooksRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="book/:id" element={<BookPage/>} />
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/search" element={<Search/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/category/:category/list" element={<ListCategoryPage/>} />
    </Routes>
    </>
  )
}
