import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BookApp from './BookApp.tsx'
import { BrowserRouter } from 'react-router-dom'
import { BooksProvider } from './contexts/BooksContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BooksProvider>
      <BrowserRouter>
        <BookApp />
      </BrowserRouter>
    </BooksProvider>
  </React.StrictMode>,
)
