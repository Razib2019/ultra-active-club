import React from 'react';
import './Cart.css';
import logo from '../../../src/images/image-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <div className='container'>
            <div className="person-info">
                <img className='cart-image' src={logo} alt="" />
                <div className='person-name'>
                    <h4>Hafizur Rahman Razib</h4>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='person-details'>
                <p>
                    <span className='details-numbers'>75</span>kg
                    <p className='details-info'>Weight</p>
                </p>
                <p>
                    <span className='details-numbers'>6.5</span>
                    <p className='details-info'>Height</p>
                </p>
                <p>
                    <span className='details-numbers'>25</span>yrs
                    <p className='details-info'>Age</p>
                </p>
            </div>
            <div className='break-container'>
                <h4>Add A Break</h4>
                <div className='break'>
                    <p><button className='btn-break'>10m</button></p>
                    <p><button className='btn-break'>20m</button></p>
                    <p><button className='btn-break'>30m</button></p>
                    <p><button className='btn-break'>40m</button></p>
                </div>
            </div>
            <div className='exercise-container'>
                <h4>Exercise Details</h4>
                <div className='exercise-time'>
                    <h5>Exercise Time</h5>
                    <p>0 Minutes</p>
                </div>
                <div className='break-time'>
                    <h5>Break Time</h5>
                    <p>0 Minutes</p>
                </div>
            </div>
            <button className='btn-activity'>
                <p className='btn-activity-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart; 