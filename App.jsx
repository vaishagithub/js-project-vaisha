import { Header } from './components/Header'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { ViewCart} from './components/ViewCart'
import { cartContext } from './components/cartContext';
import { useState } from 'react'




function App() {
  const [cart,setCart]=useState([])

  return (
    //this  context (cart,setCart) pass all component
   <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/Cart" element={<ViewCart />} />
        </Routes>
      </div>
      </BrowserRouter>
      
      
    </cartContext.Provider>
  )
}

export default App
