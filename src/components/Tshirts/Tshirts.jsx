import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tshirts = () => {

    const tshirts = useLoaderData();
    console.log(tshirts);

    return (
        <div>
            <h3>Total Tshirt data : {tshirts.length}</h3>
        </div>
    );
};

export default Tshirts;