import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/plannerbook/Books'
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import ProductPage from './pages/productpage/ProductPage';
import Product from './pages/productpage/Product';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/product/view' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  )  
}

export default App