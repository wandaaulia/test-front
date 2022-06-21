import React from "react";
import './header.css';
import logo from '../../assets/logo.svg'
import arrow from '../../assets/iconarrow.svg'

const Header = () => {
    return (
            <div className="bg-header p-5"> 
        <div className="flex flex-row justify-between"> 
            <div class="img-logo bg-black h-fit pt-2 pb-3.5 pl-2.5 pr-0.5"> 
                <img src={logo} alt="img" className="logo"/>
            </div>
            <div className="navbar flex flex-row"> 
                    <ul className="list-navbar text-white pt-3 flex flex-row  list-none flex-1"> 
                        <li className="mr-7"> Home </li>
                        <li className="mr-7"> Services • </li>
                        <li className="mr-7"> Work Flow • </li>
                        <li className="mr-7"> Portfolio • </li>
                        <li className="mr-7"> About Us • </li>
                        <li className="mr-7"> Our Value • </li>
                    </ul>
                <div className="notlp h-fit pb-4 pt-3 pr-4 pl-5 font-medium text-lg">  
                         (021) 8583944
                </div>
            </div>
        </div>
   
            <div className="absolute top-3/4 text-navbar text-8xl break-words tracking-wider font-normal text-left w-4/5">
 <h1> WE ASSIST YOU IN SOLVING TOMORROW'S <span className="text-white"> PROBLEMS TODAY </span></h1>
</div>
<div className="flex flex-row gap-4 items-end absolute arrow-container bottom-5"> 
    <h5 className="text-sm pb-0.5 text-about"> ABOUT US</h5>
    <div className="arrow-img mb-1"> <img src={arrow} alt="arrow" /> </div>
</div>
   

</div>
    )

}

export default Header;