import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Details.css';



const Details = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='details-container'>
            <div className='activities-container'>
                <div className='header'>
                    <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
                    <h2>Boost-Your-Daily-Activity</h2>
                </div>
                <h2>Select today's exercise</h2>
                <div className='activities-card-container'>
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                        ></Activity>)
                    }
                </div>
            </div>
            <div>
                <h2>Cart Component</h2>
            </div>
        </div>
    );
};

export default Details;