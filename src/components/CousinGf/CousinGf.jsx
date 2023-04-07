import React from 'react';

const CousinGf = ({gf}) => {
    return (
        <div>
            {
                gf && <h3>{gf}</h3>
            }
        </div>
    );
};

export default CousinGf;