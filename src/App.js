import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import SearchPage from './pages/SearchPage/SearchPage'
import ActorPage from './pages/ActorPage/ActorPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/details/:id" element={< DetailsPage />} />
        <Route path="/search" element={< SearchPage />} />
        <Route path="/actor/:name" element={< ActorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App