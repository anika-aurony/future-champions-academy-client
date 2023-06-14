import "./About.css"

const AboutUs = () => {
    return (
        <div>
            <h1 className='text-2xl text-center p-10'>Our Achievements</h1>
            <div>
                <div className="stats shadow w-3/4 mx-28 mb-16 bg-violet-100 makeRes">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png" alt="" className='w-12' />
                        </div>
                        <div className="stat-title">Total Students</div>
                        <div className="stat-value text-primary">25.6K</div>
                        
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmA7zkVi-iO9kxBR6aG8cHOQTpPUew2KjlSg&usqp=CAU" alt="" className='w-12'/>
                        </div>
                        <div className="stat-title">Compititions Win</div>
                        <div className="stat-value text-secondary">55</div>
                       
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqMQAGjupIPY9CHdHzPK-9eBVZ9MuKQhLbQ&usqp=CAU" alt=""  className='w-12' />
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Academic Success</div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;