import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import Movies from './components/Movies'
import Series from './components/Series'
import Games from './components/Games'
import { Link, Routes, Route } from 'react-router-dom'
import products from './products/products'
import Sidebar from './components/Sidebar'

const initialCart = localStorage.getItem('cart') !== null ? localStorage.getItem('cart') : [];

function App() {
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', cart);
  }, [cart]);

  return (
    <>
      <nav className='top-nav'>
            <Link to='/'>B Y P S T R S</Link>
            <div className="nav-right">
              <Link to='/products'>Products</Link>
              <Link to='/contact'>Contact</Link>
            </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Sidebar />}>
          <Route index element={<Products products={products}/>} />
          <Route path='movies' element={<Movies movies={products[0].items}/>} />
          <Route path='series' element={<Series series={products[1].items}/>} />
          <Route path='games' element={<Games games={products[2].items}/>} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
