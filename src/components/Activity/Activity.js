import React from 'react';
import './Activity.css';

const Activity = ({ activity, handleAddToCart }) => {
    const { name, age, description, img, time } = activity;

    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p>{description?.slice(0, 70)}...</p>
                <p>For Age: <strong>{age}</strong></p>
                <p>Time Required: <strong>{time}</strong> Minutes</p>
            </div>
            <button onClick={() => handleAddToCart(activity)} className='btn-cart'>
                <p className='btn-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;