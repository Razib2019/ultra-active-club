import React from 'react';
import './Cart.css';
import logo from '../../../src/images/image-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

const Cart = ({ cart }) => {

    let total = 0;
    for (const activity of cart) {
        total = total + activity.time;
    }

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
                {/* <p>Selected Item: {cart.length}</p> */}
                <h4>Exercise Details</h4>
                <div className='exercise-time'>
                    <h5>Exercise Time</h5>
                    <p>{total} Minutes</p>
                </div>
                <div className='break-time'>
                    <h5>Break Time</h5>
                    <p>0 Minutes</p>
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