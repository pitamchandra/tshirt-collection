import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {

    const ring = 'golden ring';
    return (
        <div className='grandpa'>
            <h1>grandpa</h1>
            <div className="flex">
            <Father ring = {ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;