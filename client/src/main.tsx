import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BookApp from './BookApp.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookApp />
    </BrowserRouter>
  </React.StrictMode>,
)
