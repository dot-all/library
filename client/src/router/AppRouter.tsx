import { Route, Routes } from "react-router-dom";
import BooksRoutes from "../books/routes/BooksRoutes";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<BooksRoutes />} />
    </Routes>
  )
}
