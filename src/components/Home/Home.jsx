import React, { useState } from 'react';
import Tshirts from '../Tshirts/Tshirts';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'
import { toast } from 'react-toastify';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tshirt) =>{
        const exits = cart.find(pd => pd._id === tshirt._id)
        if(exits){
            toast("All Ready added!");
        }else{
            const newTshirt = [...cart, tshirt]
            setCart(newTshirt);
        }
        
    }
    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(pd => pd._id !== id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='product-container'>
                {
                    tshirts.map(tshirt => <Tshirts
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart = {handleAddToCart}
                    ></Tshirts>)
                }
            </div>
            <div>
                <Cart
                    cart = {cart}
                    handleRemoveFromCart ={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;