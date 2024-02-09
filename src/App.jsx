import { Header } from './Components/Header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { ShopCategory } from './Components/Shopcategory/ShopCategory'
import { LoginSignup } from './Components/LoginSignup'
import { Footer } from './Components/Footer'
import Product from './Components/ProductComponent/Product'
import { Cart } from './Components/Cart/Cart'

function App() {

  return (
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<ShopCategory category="men"/>}/>
      <Route path='/womens' element={<ShopCategory  category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' elements={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
      
  )
}

export default App
