import React from 'react';
import CousinGf from '../CousinGf/CousinGf';

const Causin = ({children, gf}) => {
    return (
        <div>
            <p>{children}</p>

            {
                gf && <CousinGf gf= {gf}></CousinGf>
            }
            
        </div>
    );
};

export default Causin;