import React from 'react';
import './Tshirts.css'

const Tshirts = ({tshirt, handleAddToCart}) => {
    const { name, picture, price} = tshirt;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h3>Price : ${price}</h3>
            <button onClick={()=>handleAddToCart(tshirt)}>buy now</button>
        </div>
    );
};

export default Tshirts;