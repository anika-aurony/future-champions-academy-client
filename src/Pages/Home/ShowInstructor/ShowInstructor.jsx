

const ShowInstructor = (props) => {
    console.log(props.instruct)
    const {name, image, email} = props.instruct; 
    return (
        <div>
            <div className="card w-80 bg-blue-100 shadow-xl mb-12" >
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default ShowInstructor;