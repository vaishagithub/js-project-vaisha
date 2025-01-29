/* eslint-disable react/prop-types */


import "./product.css";
import { useContext } from "react";
import { cartContext } from './cartContext';

export const Product = ({product}) => {

  const{cart,setCart}=useContext(cartContext);
  const addCart = () =>{
    setCart([...cart,product])//...cart means add previous product,product means current selected product
  };
  const removeCart=() =>{
    setCart(cart.filter((c)=>c.id!==product.id));//c means person who choose to delete item .its c collect all  deleted items
  };


  return (
    <div className='product'>
      <div className='img'>
      <img src={product.pic} alt={product.name}/>
      </div>
      <div className='details'>
        <h3>{product.name}</h3>
        <p>Price Rs: {product.amt}</p>
       {cart.includes(product)? (<button className='btnRemove' onClick={removeCart}>Remove from Cart</button>) : (<button onClick={addCart}>Add to Cart</button>)}
       </div>
    </div>
  )
}
