import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
export const BangleContext = createContext('glass bangle');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, setMoney] = useState(0)
    const ring = 'golden ring';

    return (
        <div className='grandpa'>
            <h1>grandpa</h1>
            <p>has money {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <BangleContext.Provider value='glass bangle'>
                    <div className="flex">
                        <Father ring = {ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </div>
                </BangleContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;