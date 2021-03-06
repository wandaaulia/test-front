import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/iconarrow.svg";
import menu from "../../data/menu.json";

const Header = () => {
  return (
    <div className="bg-header p-5">
      <div className="flex flex-row justify-between">
        <div class="img-logo bg-black h-fit pt-2 pb-3.5 pl-2.5 pr-0.5">
          <img src={logo} alt="img" className="logo" />
        </div>
        <div className="navbar flex flex-row">
          <ul className="list-navbar text-white pt-3 flex flex-row  list-none  flex-1">
            {menu.map((item) => {
              return (
                <li className="mr-7 text-list font-light" key={item.id}>
                  {" "}
                  {item.desc}{" "}
                </li>
              );
            })}
          </ul>
          <div className="notlp h-fit pb-4 pt-3 pr-4 pl-5 font-medium text-lg">
            (021) 8583944
          </div>
        </div>
      </div>

      <div className="absolute  text-navbar text-8xl break-words text-line-heigth tracking-wider font-normal text-left w-4/5">
        <h1>
          {" "}
          WE ASSIST YOU IN SOLVING TOMORROW'S{" "}
          <span className="text-white"> PROBLEMS TODAY </span>
        </h1>
      </div>
      <div className="flex flex-row gap-4 items-end absolute arrow-container bottom-5">
        <h5 className="text-sm pb-0.5 text-about"> ABOUT US</h5>
        <div className="arrow-img mb-1">
          {" "}
          <img src={arrow} alt="arrow" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
