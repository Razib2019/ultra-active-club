import React, { useEffect, useState } from 'react';
import './Cart.css';
import logo from '../../../src/images/image-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Break from '../Break/Break';

const Cart = ({ cart }) => {

    const [breaks, setBreaks] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('breaks.json')
            .then(res => res.json())
            .then(data => setBreaks(data))
    }, []);

    let total = 0;
    for (const activity of cart) {
        total = total + activity.time;
    }

    useEffect(() => {
        const storedData = localStorage.getItem('break-time');
        setTime(storedData);
    }, []);

    const addToCart = (breakTime) => {
        localStorage.setItem('break-time', breakTime);
        setTime(breakTime);
    }

    // Toast
    const activityCompleteBtn = () => {
        Swal.fire(
            'Congratulations!',
            'You are done with your activity!',
            'success'
        )
    }

    return (
        <div className='cart'>
            <div className="person-info">
                <img className='cart-image' src={logo} alt="" />
                <div className='person-name'>
                    <h4>Hafizur Rahman Razib</h4>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='person-details'>
                <p>
                    <span className='details-numbers'>75</span>kg <br />
                    <span className='details-info'>Weight</span>
                </p>
                <p>
                    <span className='details-numbers'>6.5</span> <br />
                    <span className='details-info'>Height</span>
                </p>
                <p>
                    <span className='details-numbers'>25</span>yrs <br />
                    <span className='details-info'>Age</span>
                </p>
            </div>
            <div>
                <h4>Add A Break</h4>
                <div className='break-container'>
                    {
                        breaks.map(breakTime => <Break
                            key={breakTime.id}
                            breakTime={breakTime}
                            addToCart={addToCart}
                        ></Break>)
                    }
                </div>
            </div>
            <div className='exercise-container'>
                <h4>Exercise Details</h4>
                <div className='exercise-time'>
                    <h5>Exercise Time</h5>
                    <p>{total} Minutes</p>
                </div>
                <div className='break-time'>
                    <h5>Break Time</h5>
                    <p>{time} Minutes</p>
                </div>
            </div>
            <button onClick={activityCompleteBtn} className='btn-activity'>
                <p className='btn-activity-text'>
                    Activity Completed
                </p>
            </button>
        </div >
    );
};

export default Cart; 