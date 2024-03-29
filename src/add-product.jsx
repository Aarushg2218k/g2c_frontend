import React, { useState,useEffect } from 'react'
import { addproduct } from './services/product-controller';
import { GrGallery } from "react-icons/gr";
import {Validateaxios} from './services/user-controller'
export const Avail = () => {

  const[product,prodetails]=useState({
    email:"",
    pro_category:"",
    item:"",
    price:"",
    quantity:"",
    pro_pic:"",
    units:""
  })

  useEffect(()=>{
    validationfunction();
},[])

async function validationfunction(){
    const serverMsg= await Validateaxios();
    if(serverMsg.data.status===true){
      prodetails({...product,["email"] : serverMsg.data.item.data.email})
      console.log(product.email);  
    }
    else    
        alert(JSON.stringify(serverMsg.data.err));
}
  
  const [prev , setPrev] = useState(null);
  function doPrev(inpFile) {
    const [file] = inpFile.files;
    if (file) {
      setPrev(URL.createObjectURL(file));
    }
  }
  function doUpdatePic(event) {
    prodetails({ ...product, ["pro_pic"]: event.target.files[0] });
    doPrev(event.target);
  }

  function doupdate(event){
    var {name,value} = event.target;
    prodetails({...product,[name]:value});
  }

  const publish=async()=>{
    // console.log(product)
    var formdata = new FormData();
    for (var prop in product) {
      formdata.append(prop, product[prop]);
    }
    const serverMsg = await addproduct(formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (serverMsg.data.status === true) alert("Product Added");
    else alert(serverMsg.data.msg);
  }

  return (
    <>
    <div class="">
     <form class="bg-gray-100 text-gray-500 shadow-xl w-full overflow-hidden">
       <div class="flex w-full ">
           <div class=" ms-12 w-3/4 py-10 px-5 md:px-10">
           <div class="text-center mb-5 ">
                   <h1 class="font-bold text-3xl ms-auto text-gray-900">Add Product</h1>
            </div>
            
            <div class="sm:col-span-4">
            <label
              for="email"
              class="block text-md font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                readOnly="true"
                value={product.email}
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 h-9 sm:text-sm sm:leading-6"
                placeholder="Example@gmail.com"
                onChange={doupdate}
                autoFocus={true}
              />
            </div>
          </div>

          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-md font-medium leading-6 text-gray-900"
                >
                  Product Category
                </label>
                <div class="mt-2">
                  <select name="pro_category" id="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset h-9 focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doupdate} >
                    <option value="Select">Select</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Dairy products">Dairy products</option>
                    <option value="Poultry">Poultry</option>
                    <option value="Animal waste">Animal Waste</option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-md font-medium leading-6 text-gray-900"
                >
                  Item name
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="item"
                    id="last-name"
                    autocomplete="tel"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset h-9 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter number"
                    // value={obj.contact}
                    onChange={doupdate}
                  />
                </div>
              </div>

              <div class="sm:col-span-2 mt-[-14px] ">
                <label
                  for="product_price"
                  class="block text-md font-medium leading-6 text-gray-900"
                >
                  Product price / unit
                </label>
                <div class="mt-2">
                  <input type="text" name='price' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset h-9 focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doupdate}/>

                </div>
              </div>
              <div class="sm:col-span-2 mt-[-14px] ">
                <label
                  for="quantity"
                  class="block text-md font-medium  lg:mt-0 leading-6 text-gray-900"
                >
                  Quantity
                </label>
                <div class="mt-2">
                  <input type="number" name='quantity' className="block w-full lg:mt-0 md:mt-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset h-9 focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doupdate}/>

                </div>
              </div>
              <div class="sm:col-span-2 mt-[-14px] ">
                <label
                  for="unit"
                  class="block text-md font-medium leading-6 text-gray-900"
                >
                  units
                </label>
                <div class="mt-2">
                <select name="units" id="" class="block w-full md:mt-8 lg:mt-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset h-9 focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doupdate} >
                    <option value="Select">Select</option>
                    <option value="Kg">Kg</option>
                    <option value="Litre">Litre</option>
                  </select>

                </div>
              </div>
              
              <div class="mt-7 md:ms-[200px] mb-2 flex items-center justify-end gap-x-6">
          
          <button
            type="button"
            class="rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={publish}
          >
            Publish
          </button> 

          
           </div>
            </div>
          </div>
        </div>
          <div class=" ms-12 w-1/4 py-10 px-5 bg-indigo-400 md:px-10">
          
              <div class="sm:col-span-2">
              <label
                  for="city"
                  class="block text-lg font-medium ms-auto mt-10 leading-6 text-gray-900"
                >
                  Product pic
                </label>
               {/* <img src="" alt="ppic" className="w-auto h-40 mb-[-150px]" /> */}
               {
                    prev ? <img src={prev} alt="ppic" className="w-auto h-28 mx-auto mt-4" /> : (
                        <div
                    class="h-28 w-28 lg:ms-16 ms-auto mt-6 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    >
                    <GrGallery size={60}></GrGallery>
                    </div>
                    )
                    }
              </div>
              <div class="sm:col-span-2 ">
                
                <div class="mt-2">
                  <input type="file" className="text-sm text-grey-500
                    file:mr-5 file:py-2 file:px-6
                    file:rounded-full text-transparent p-1 file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:cursor-pointer hover:file:bg-amber-50
                    hover:file:text-amber-700 ms-auto lg:ms-[23px] mt-9" onChange={doUpdatePic}/>
                    
                </div>
              </div>
          </div>
        
       </div>
      </form>
     </div>
    </>
  )
}
