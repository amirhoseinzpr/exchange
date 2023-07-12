import React from 'react';
import spinner from '../Infinity-1s-200px.gif'

const Loader = () => {
    return (
        <div >
            <img src={spinner} alt='ops' />
            <h2>Loading...</h2>            
        </div>
    );
};

export default Loader;