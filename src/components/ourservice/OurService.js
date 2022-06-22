import React from "react";
import "./services.css";
import arrow from "../../assets/arrowService.svg";
import btnArrow from "../../assets/iconarrow.svg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import img_app from "../../assets/img-custom-app.png";
import img_mockup from "../../assets/design_wireframe.png";
import img_device from "../../assets/developing_web.png";
import dataList from "../../data/dataList.json";


const OurService = () => {
  return (
    <div className="bg-black container-service text-white divide-y divide-white ">
      <div className="flex flex-row justify-start pb-20">
        <h1 className="mr-28 text-6xl break-normal text-left tracking-wide"> OUR SERVICES </h1>
        <p className="flex pr-8 mr-16 items-start pt-3 text-left tracking-wide flex-wrap text-services break-normal width-45-service">
          {" "}
          We’ve worked with a wide array of clients across the globe to apply design fundamentals of elegance, simplicity{" "}
        </p>
        <div className="flex flex-row justify-between pt-3 arrow-service">
          <h5 className="text-sm pb-0.5 text-view"> VIEW ALL</h5>
          <div className="arrow-img-service mb-1 pt-1">
            {" "}
            <img src={arrow} alt="arrow" />{" "}
          </div>
        </div>
      </div>
      <ul clasName="text-white">
        <li className="bottom-white flex flex-row justify-between pt-8 pb-5">
          <h5 className="text-lg text-title text-center"> E-COMMERCE DEVELOPMENT </h5>
          <div className="flex flex-row width-55">
            <div className="text-xs width-70 text-left">
              You want to get the best out of your business and turn mere visitors into paying customers? Sell your products on a secure platform and not worry about the technical details? We will help you implement your E-Commerce
              platform.
            </div>
            <div className="text-black bg-blue-100 btn-learn">
              <h5> LEARN MORE </h5>
              <div className="w-1/4 btn-arrow">
                <img src={btnArrow} alt="Arrow" className="arrow-learn" />{" "}
              </div>
            </div>
            <div className="text-white icon-plus">
              <AiOutlinePlus />
            </div>
          </div>
        </li>
        <li className="flex flex-row justify-between pt-8 pb-5">
          <div className="flex flex-col justify-between items-start width-43-custom">
            <h5 className="text-lg text-title font-bold text-center pt-1"> CUSTOM APP DEVELOPMENT </h5>
            <div className="img_app_custom">
              <img src={img_app} alt="img" />
            </div>
          </div>
          <div className="flex flex-col width-55">
            <div className="flex flex-row justify-between">
              <div className="text-xs width-70  text-left pr-2">
                It’s time to turn your vision into a high-performing and responsive app. This is how your customers will interact with your business, which is why we pay attention to every detail.
              </div>
              <div className="icon-minus text-center">
                <AiOutlineMinus />
              </div>
            </div>
            <div className="flex flex-row mt-1 pt-4">
              <img src={img_mockup} alt="img-wireframe" className="width-48 mr-5" />
              <img src={img_device} alt="img-wireframe" className="width-48" />
            </div>
            <div className="flex flex-row mt-5 items-center justify-between pr-14">
              <div className="text-desc width-70 text-start">
                In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital
                experience. They always put the clients first no matter how complicated the tasks are.
              </div>
              <div className="text-black btn-learn-2">
                <h5> LEARN MORE </h5>
                <div className="w-1/4 btn-arrow">
                  <img src={btnArrow} alt="Arrow" className="arrow-learn" />{" "}
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className= "flex flex-row-reverse pt-5"> 
          <div className="bottom-white-2"> </div>
        </li>
        { dataList.map(item => {
          if(item.id === 4) {
              return (
       <li className=" flex flex-row justify-between pt-6 pb-0 items-center" key={item.id}>

          <h5 className="text-lg text-title-2 tracking-wider"> {item.title} </h5>
          <div className="flex flex-row width-55 relative">
            <div className="text-desc width-70 pr-8 text-left">
             {item.desc}
            </div>
            <div className="text-black btn-learn-3 ">
              <h5> LEARN MORE </h5>
              <div className="w-1/4 btn-arrow">
                <img src={btnArrow} alt="Arrow" className="arrow-learn" />{" "}
              </div>
            </div>
            <div className="text-white icon-plus-3 absolute right-0">
              <AiOutlinePlus />
            </div>
          </div>
        </li> 
          ) 
          }
        return (
       <li className="bottom-white flex flex-row justify-between pt-5 pb-5 items-center" key={item.id}>

          <h5 className="text-lg text-title-2 tracking-wider"> {item.title} </h5>
          <div className="flex flex-row width-55 relative">
            <div className="text-desc width-70 pr-8 text-left ">
             {item.desc}
            </div>
            <div className="text-black btn-learn-3 ">
              <h5> LEARN MORE </h5>
              <div className="w-1/4 btn-arrow">
                <img src={btnArrow} alt="Arrow" className="arrow-learn" />{" "}
              </div>
            </div>
            <div className="text-white icon-plus-3 absolute right-0">
              <AiOutlinePlus />
            </div>
          </div>
        </li> 
          ) 
        })}
      </ul>
    </div>
  );
};

export default OurService;