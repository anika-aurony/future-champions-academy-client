import   { useEffect, useState } from 'react';
import ShowInstructor from '../../Home/ShowInstructor/ShowInstructor';

const AllInstructors = () => {
    const [instructors, setInstructor] = useState([]);
    console.log(instructors)

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-center p-10'>Our All Instructor</h1>
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

export default AllInstructors;