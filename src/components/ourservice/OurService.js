import React from "react";
import "./services.css";
import arrow from "../../assets/arrowService.svg";

const OurService = () => {
  return (
    <div className="bg-black container-service text-white">
      <div className="flex flex-row justify-start">
        <h1 className="mr-24 text-7xl text-left"> OUR SERVICES </h1>
        <p className= "flex items-center text-left text-2xl break-normal w-3/4">
          {" "}
          We’ve worked with a wide array of clients across the globe to apply
          design fundamentals of elegance, simplicity{" "}
        </p>
        <div className="flex flex-row justify-between gap-4 arrow-service">
          <h5 className="text-sm pb-0.5 text-about"> VIEW ALL</h5>
          <div className="arrow-img-service mb-1">
            {" "}
            <img src={arrow} alt="arrow" />{" "}
          </div>
        </div>
      </div>
      <ul>
        <li> </li>
      </ul>
    </div>
  );
};

export default OurService;
