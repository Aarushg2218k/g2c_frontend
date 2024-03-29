import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import profile_pic from './pics/detail-logo.png'
import { privateReq } from './services/url-config'
import { Validateaxios } from './services/user-controller'

export const CDash = () => {


    // useEffect(()=>{
    //         validationfunction();
    // },[])

    const navigate = useNavigate();

    function profile(){
        navigate("/profile-form");
    }
    function Avail(){
        navigate("/Avail_product");
    }
    function Manage(){
        navigate("/Manage_product");
    }
    function logout(){
        localStorage.setItem("token"," ");
        navigate("/signup")
    }

  return (
    <div>

            <div class="text-center mb-5 mt-8">
                {/* <RiShieldUserFill size={60} className="mx-auto mb-3 mt-[-6px]"></RiShieldUserFill> */}
                <h1 class="font-bold text-3xl text-gray-900">
                 Wlcome Consumer 
                </h1>
              </div>
        <div  className='flex mx-3 my-8 mt-20 px-3 ms-3'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Profile</h5>
        </a>
        <img class="mb-3 font-normal text-gray-700 dark:text-gray-400" src={profile_pic} ></img>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here You can create your Profile for Further Processes on our site</p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={profile}>
            Create Profile
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
        </div>
        <div class="max-w-sm ms-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Avail Product</h5>
        </a>
        <img class="mb-3 font-normal text-gray-700 dark:text-gray-400" src={profile_pic} ></img>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here You can add your Products for Further Selling of products </p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={Avail}>
            Publish Product
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
        </div>
        <div class="max-w-sm ms-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Manage Product</h5>
        </a>
        <img class="mb-3 font-normal text-gray-700 dark:text-gray-400" src={profile_pic} ></img>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here You Manage Previously added products for selling</p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={Manage}>
            Create Profile
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
        </div>
        <div class="max-w-sm ms-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Logout</h5>
        </a>
        <img class="mb-3 font-normal text-gray-700 dark:text-gray-400" src={profile_pic} ></img>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here You can Logout your Profile and reach at home page</p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={logout}>
            Create Profile
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
        </div>
        
        </div>
        </div>
  )
}


