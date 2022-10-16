import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import './Details.css';



const Details = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleAddToCart = (activity) => {
        // console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
    }


    return (
        <div>
            <div className='details-container'>
                <div className='activities-container'>
                    <div className='header'>
                        <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
                        <h2>BOOST-YOUR-DAILY-ACTIVITY</h2>
                    </div>
                    <h2>Select today's exercise</h2>
                    <div className='activities-card-container'>
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                handleAddToCart={handleAddToCart}
                            ></Activity>)
                        }
                    </div>
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <div>
                <h2 className='qa-section'>Frequently Asked Question Section:</h2>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Details;