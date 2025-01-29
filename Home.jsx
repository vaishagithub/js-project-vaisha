
import { useState } from 'react'
import { Product } from './product';
import './Home.css';
import data from '../assets/Products.json'
export const Home = () => {
   const [Products] = useState(data);
  return (
    <div className="product-container">
        {Products.map((product)=>(<Product  Key={product.id}  product={product}/> 
        ))}
        <p>This is Home page</p>
    </div>
  )
}
//product={product} is the props
