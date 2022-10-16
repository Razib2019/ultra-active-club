import React from 'react';
import './Break.css';

const Break = ({ addToCart, breakTime }) => {
    const { name, time } = breakTime;

    return (
        <div>
            <div>
                <button onClick={() => addToCart(time)} className='btn-break'>{name}</button>
            </div>
        </div>
    );
};

export default Break;