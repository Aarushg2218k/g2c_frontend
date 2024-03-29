import React, { useState,useEffect } from "react";
import { manageproduct } from "./services/product-controller";
import { Validateaxios } from "./services/user-controller";
function Manage() {
  const [obj, setobj] = useState({
    email: "",
  });

  useEffect(()=>{
    validationfunction();
},[])

async function validationfunction(){
    const serverMsg= await Validateaxios();
    if(serverMsg.data.status===true){
      setobj({...obj,["email"] : serverMsg.data.item.data.email})
      // console.log(product.email);  
    }
    else    
        alert(JSON.stringify(serverMsg.data.err));
}

  const [data, setdata] = useState([]);

  function Emlstore(event) {
    var { name, value } = event.target;
    setobj({ ...obj, [name]: value });
  }
  const dofetch = async () => {
    const serverMsg = await manageproduct(obj);
    const ret = serverMsg.data.result;
    setdata(ret);
  };
  // function doedit(){
  //     alert(JSON.stringify(data));
  // }
  return (
    <div>
      <div class="">
        <div class="bg-gray-100 text-gray-500 shadow-xl w-full overflow-hidden">
          <div class="flex w-full h-[500px]">
            <div class=" w-full py-10 px-5 md:px-10">
              <div class="text-center mb-5">
                {/* <RiShieldUserFill size={60} className="mx-auto mb-3 mt-[-6px]"></RiShieldUserFill> */}
                <h1 class="font-bold text-3xl text-gray-900">
                  Manage Products
                </h1>
              </div>
              <div>
                <div class="flex -mx-3">
                  <div class="w-96 md:ms-60 px-3 mb-5">
                    <label for="" class="text-md font-semibold px-1">
                      Email
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={obj.email}
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="example@gmail.com"
                        onChange={Emlstore}
                      />
                    </div>
                  </div>

                  <button
                    class="block w-36 h-11 mt-6 max-w-xs mx-6 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg  font-semibold"
                    onClick={dofetch}
                  >
                    Fetch products
                  </button>
                  {/* <button class="block w-36 h-11 mt-6 max-w-xs mx-6 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg  font-semibold" 
                           onClick={docheck2}
                           >alert</button> */}
                </div>
                {/* ===================  Table ======================================= */}

                <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col" className="py-2  font-medium text-gray-500">Image</th>
                                    <th scope="col" className="py-2  font-medium text-gray-500">Name</th>
                                    <th scope="col" className="py-2  font-medium text-gray-500">Category</th>
                                    <th scope="col" className="py-2  font-medium text-gray-500">Price</th>
                                    <th scope="col" className="py-2  font-medium text-gray-500">Ouantity</th>
                                    <th scope="col" className="py-2  font-medium text-gray-500">Buttons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((product, index) => {
                                        return (
                                            <tr key={index} className='text-center border-b transition duration-300 ease-in-out border-neutral-50 hover:bg-neutral-600'>
                                                <td className="py-2 whitespace-nowrap">
                                                    <img src={`https://g2c-backend-6pje.onrender.com/product-pics/${obj.email}${product.pro_pic}`}alt="product pic" className="h-20 w-20 mx-auto rounded-md"></img>
                                                </td>
                                                <td className="py-2 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{product.item}</div>
                                                </td>
                                                <td className="py-2 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{product.pro_category}</div>
                                                </td>
                                                <td className="py-2 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{product.price}</div>
                                                </td>
                                                <td className="py-2 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{product.quantity + " " + product.unit}</div>
                                                </td>
                                                <td className="py-2 whitespace-nowrap">
                                                    <button className="text-indigo-300 mx-2 hover:text-indigo-900">Edit</button>
                                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
