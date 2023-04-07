import React, { useContext } from 'react';
import Causin from '../Causin/Causin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    
    return (
        <div>
            <h1>uncle</h1>
            <p>grandpa money : {money}</p>
            
            <button onClick={() => setMoney(money + 1000)}>send 1000tk</button>
            <section>
                <Causin gf = 'sosti rani'>Narayon</Causin>
            </section>
        </div>
    );
};

export default Uncle;