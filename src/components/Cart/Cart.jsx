import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
   let productNumber;
   if(cart.length === 0){
    productNumber = <p>please select a product</p>
   }else{
    productNumber = <p>Thanks for selected</p>
   }
    
    return (
        <div className='order-summary'>
            <h3>order summary </h3>
            <h4>Total cart : {cart.length}</h4>
            {
                cart.length >=3 ? <p className={`lala ${cart.length >= 5 && 'green'}`}>wow great.you boroloks</p> : <p>are you fokir?</p>
            }
            {
                cart.map(pd => <p
                    key = {pd._id}
                >{pd.name} <button onClick={()=>handleRemoveFromCart(pd._id)}>X</button></p>)
            }
            {productNumber}
            {
                cart.length === 7 && <p className='green'>you selected all product</p> 
            }
        </div>
    );
};

export default Cart;