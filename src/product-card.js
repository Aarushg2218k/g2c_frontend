import React from 'react'
import './pro.css'
function Product_card(props) {
  return (
//     <div className='px-7 md:px-10 my-8'>
//       <h1 className='text-3xl text-primary font-semibold mt-10 md:mt-1'>Growers</h1>
//       {/* featured projects */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 items-center justify-center">
//     <div
//     //   key={index}
//       className="flex flex-col bg-[#2A2A33] p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-[#3A3A45] border border-primary hover:border-secondary h-[600px]"
//     >
//       <h3 className="text-primary font-semibold text-lg mb-2 text-center">
//         {props.item}
//       </h3>
//       <a
//         // href={project.photo}
//         target="_blank"
//         rel="noreferrer"
//         className="mb-4"
//       >
//         <img
//           src={`http://localhost:2002/product-pics/${props.email}${props?.pro_pic}`}
//           alt={props.item}
//           className="rounded-lg hover:opacity-90 transition-opacity"
//         />
//       </a>
//       <p className="text-primary text-1xl font-semibold mb-2">Description:</p>
//       <p className="text-white">{props.quantity}</p>
//       <div className="mt-4 text-center">
//         <button className="btn bg-primary py-2 px-6 rounded-full text-white hover:bg-secondary transition-bg">
//           Details
//         </button>
//       </div>
//     </div>
// </div>

//     </div>
    <div className="bg-amber-100 rounded-xl w-[300px] shadow-2xl ms-5 my-3 p-4 ">
        
        {/* <h2 style={{textAlign:"center"}}>{props.pro_category} </h2> */}
            <img src={`https://g2c-backend-6pje.onrender.com/product-pics/${props.email}${props?.pro_pic}`} alt=""></img>
            <p>Product Name:- &nbsp;{props.item}</p>
            <p>Product Price / unit :- &nbsp;{props.price}</p>
            <p>Product Quantity :- &nbsp;{props.quantity} {props.units}</p>
            <button class="bg-blue-700 text-white flex ms-4">
            <p className='ms-2 mt-2'>Details</p>
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
  )
}

export default Product_card