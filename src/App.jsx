import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Category from './pages/Category/Category'
import Moviedetail from './pages/MovieDetail/Moviedetail'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/movie/:id' element={<Moviedetail />} />
          <Route path='/movies/:type' element={<Category />} />
          <Route path='/*' element={<h2>404 Error</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
