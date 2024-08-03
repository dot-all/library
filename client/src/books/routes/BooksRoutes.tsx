import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function BooksRoutes() {
  return (
    <>
    <Routes>
      <Route path="app" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/app" />} />
    </Routes>
    </>
  )
}
