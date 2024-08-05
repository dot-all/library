import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BookApp from './BookApp.tsx'
import { BrowserRouter } from 'react-router-dom'
import { BooksProvider } from './contexts/BooksContext.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BooksProvider>
        <BrowserRouter>
          <BookApp />
        </BrowserRouter>
      </BooksProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
