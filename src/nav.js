import React, { useState } from "react";
// import { Link } from 'react-scroll';
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
const Header = (props) => {

  const {logedin , setlogedin} = props;
  const navigate = useNavigate();
  function loginHandler() {
    navigate("/login");
  }
  function logoutHandler(){
    setlogedin(false);
    navigate("/signup");
    localStorage.removeItem("token");
  }
  function signupHandler() {
    navigate("/signup");
  }
  function DashboardHandler(){
    navigate("/dashboard")
  }

  let [open, setopen] = useState(false);
  return (
    <div className="w-full bg-slate-900">
      <div className="md:flex items-center md:w-full justify-between py-4 md:px-10 px-7">
        {/*Logo section*/}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-white">G 2 C</span>
        </div>
        {/* mobile menu icon */}
        <div
          onClick={() => setopen(!open)}
          className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute"
        >
          {open ? (
            <XMarkIcon></XMarkIcon>
          ) : (
            <Bars3BottomRightIcon></Bars3BottomRightIcon>
          )}
        </div>
        {/* Nav Link item */}
        <ul
          className={`md:flex md:item-center ms-4 md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-9 bg-slate-400 sm:bg-slate-400  md:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7 font-semibold flex">
            {logedin ? (
              <button
                className="block w-full max-w-xs mx-auto bg-white  focus:bg-indigo-700 text-slate-900 rounded-lg  py-1 font-semibold me-3 px-3"
                onClick={DashboardHandler}>
                Dashboard
              </button>
            ) : (
              <button
                className="block w-full max-w-xs mx-auto bg-white focus:bg-indigo-700 text-slate-900 rounded-lg  py-1 font-semibold ms-3 px-3"
                onClick={signupHandler}
              >
                SignUp
              </button>
            )}
            {logedin ?
              <button
                className="block w-full max-w-xs mx-auto bg-white focus:bg-indigo-700 text-slate-900 rounded-lg  py-1 font-semibold ms-3 px-3"
                onClick={logoutHandler}
              >
                Logout
              </button>
            :
              <button
                className="block w-full max-w-xs mx-auto bg-white focus:bg-indigo-700 text-slate-900 rounded-lg  py-1 font-semibold ms-3 px-3"
                onClick={loginHandler}
              >
                login
              </button>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
