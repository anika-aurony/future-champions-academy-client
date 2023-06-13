import { useEffect, useState } from 'react';
import ShowClasses from '../ShowClasses/ShowClasses';


const PopularClasses = () => {
    const [popularClasses, setpopularClasses] = useState([]);

    console.log(popularClasses)

    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => setpopularClasses(data.slice(0, 6)))
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-center p-10'>Our Popular Classes</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mx-8'>
                {
                    popularClasses.map(popularClass => <ShowClasses key={popularClass._id}
                        popularClass={popularClass}></ShowClasses>
                    )
                }
            </div>
        </div>
    );
};

export default PopularClasses;