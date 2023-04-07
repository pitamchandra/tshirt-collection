import React, { useContext } from 'react';
import { BangleContext, MoneyContext } from '../Grandpa/Grandpa';
import './Special.css'

const Special = ({ring}) => {
    const bangle = useContext(BangleContext)
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h4>Bobita Roy</h4>
            <h6>{bangle}</h6>
            
            <p className={`lala ${money > 2000 && 'blue'} ${money>5000 && 'orange'}`}>money: {money}</p>
            {
                money > 5000 && <p>very happy</p>
            }
        </div>
    );
};

export default Special;