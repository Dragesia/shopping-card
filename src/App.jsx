import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Movies from './components/Movies'
import Series from './components/Series'
import Games from './components/Games'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import products from './products/products'
import Sidebar from './components/Sidebar'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'

const initialCart = localStorage.getItem('cart') !== null ? localStorage.getItem('cart') : [];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false)
  const [home, setHome] = useState(true);
  const [category, setCategory] = useState('All Posters');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setHome(true);
    else setHome(false)
  }, [location]) 

  useEffect(() => {
    localStorage.setItem('cart', cart);
  }, [cart]);

  function handleCartClick() {
    setIsCartActive(!isCartActive);
  }

  function handleAddToCart(newItem) {
    setCart([...cart, newItem]);
  }

  return (
    <>
      <nav className='top-nav'>
            <Link to='/' onClick={() => setHome(true)}style={{color: home ? 'white' : 'black'}}>B Y P S T R S</Link>
            <div className="nav-right">
              <Link to='/catalog' onClick={() => {setHome(false); setCategory('All Posters');}} style={{color: home ? 'white' : 'black'}}>Products</Link>             
              <button className='cart-btn' onClick={handleCartClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              </button>
            </div>
      </nav>
      <Cart isOpen={isCartActive} cart={cart} setCart={setCart} handleClose={handleCartClick}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Sidebar {...{category, setCategory}}/>}>
          <Route index element={<Products products={products}/>} />
          <Route path='movies' element={<Movies movies={products[0].items}/>} />
          <Route path='series' element={<Series series={products[1].items}/>} />
          <Route path='games' element={<Games games={products[2].items}/>} />
        </Route>
        <Route path='/products/:id' element={<ProductPage /*cart={cart}*/ handleAddToCart={handleAddToCart} handleCartClick={handleCartClick}/>} />
      </Routes>
    </>
  )
}

export default App
