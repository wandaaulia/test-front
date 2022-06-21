import React from "react";
import './services.css';
import arrow from '../../assets/iconarrow.svg'

const OurService = () => {

    return (
        <div className="bg-black container-service text-white"> 
            <div className="flex flex-row justify-start">  
                <h1 className="mr-72"> OUR SERVICE </h1>
                <p className="m-5">  We’ve worked with a wide array of clients across the globe to apply design fundamentals of elegance, simplicity </p>
            <div className="flex flex-row gap-4"> 
            <h5 className="text-sm pb-0.5 text-about"> ABOUT US</h5>
            <div className="arrow-img mb-1"> <img src={arrow} alt="arrow" /> </div>
        </div>
            </div> 
            <ul> 
                <li> </li>
            </ul>
        </div>
    )
}

export default OurService;