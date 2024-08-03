import { Route, Routes } from "react-router-dom";
import BooksRoutes from "../routes/BooksRoutes";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<BooksRoutes />} />
    </Routes>
  )
}
