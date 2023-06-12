
import page404 from "../../assets/page404.jpg"
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='text-center'>
                <button className='btn bg-[indigo] text-[white] my-5'><Link to="/">Back to Home</Link></button>
                <img src={page404} alt=""   className='w-1/3 mx-auto'/>

            </div>
    );
};

export default Page404;