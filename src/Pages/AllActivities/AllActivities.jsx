import { useEffect, useState } from 'react';
import ShowActivities from '../ShowActivities/ShowActivities';

const AllActivities = () => {
    const [activities, setActivities] = useState([]);
    console.log(activities)

    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-center p-10'>Classes We Offered</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mx-8'>
                {
                    activities.map(activity => <ShowActivities key={activity._id}
                        activity={activity} ></ShowActivities>

                    )
                }
            </div>
            
        </div>
    );
};

export default AllActivities;