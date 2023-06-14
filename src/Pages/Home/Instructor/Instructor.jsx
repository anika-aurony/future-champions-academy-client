import  { useEffect, useState } from 'react';
import ShowInstructor from '../ShowInstructor/ShowInstructor';

const Instructor = () => {
    const [instructors, setInstructor] = useState([]);
    console.log(instructors)

    useEffect(() => {
        fetch('https://future-champions-academy-server-side.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructor(data.slice(0, 6)))
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-center p-10'>Our Popular Instructor</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-8'>
                {
                    instructors.map(intruct => <ShowInstructor key={intruct._id}
                        instruct={intruct} ></ShowInstructor>

                    )
                }
            </div>
        </div>
    );
};

export default Instructor;