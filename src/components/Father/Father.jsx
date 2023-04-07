import React from 'react';
import Myself from '../Myself/Myself';

const Father = ({ring}) => {
    return (
        <div>
            <h1>father</h1>
            <section>
                <Myself ring={ring}></Myself>
            </section>
        </div>
    );
};

export default Father;