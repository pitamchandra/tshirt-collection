import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h1>father</h1>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;