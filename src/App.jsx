import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import { Link, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
