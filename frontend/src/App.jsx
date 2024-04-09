import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import { useSelector } from 'react-redux'
import Cart from './Pages/Cart'
import LoginRegister from './Pages/LoginRegister'
// import Categories from './Pages/Categories'
import ProductDetails from './Pages/ProductDetails'
import NotFound from './Pages/NotFound'
export default function App() {
  const { token } = useSelector(state => state.auth)
  return (
    <>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products/:categoryName' element={<Products />} />
          <Route path='/Product-details/:id/:name' element={<ProductDetails />} />
          {/* <Route path='/cart' element={token ? <Cart /> : <Navigate to={'/login-register'} />} /> */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login-register' element={!token ? <LoginRegister /> : <Navigate to={'/'} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
