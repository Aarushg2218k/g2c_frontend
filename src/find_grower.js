import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product_card from './product-card';
import { findgrower } from './services/product-controller';
function Grower() {

    const [compelete_data , setData]  = useState([])
    const [categories,setcategories]= useState([]);
    const [combocities,setcities]= useState([]);
    const [filteredData , setFilteredData] = useState([]);

    const [obj,setobj] = useState({
        pro_category:"",
        city:""
    })
    useEffect(()=>{
        fetchcategory();
    },[]);
    async function fetchcategory()
    {
        const serverMsg= await findgrower();
        if(serverMsg.data.status===true){
          console.log(serverMsg.data.retDoc);
           setData(serverMsg.data.retDoc);
           setcategories([...new Set(serverMsg.data.retDoc.map((obj)=>{return(obj.pro_category)}))]);    
           setcities([...new Set(serverMsg.data.retDoc.map((obj)=>{return(obj.city)}))]);    
        }
        else    
            alert(JSON.stringify(serverMsg.data.err));
    }
    function doupdate(event){
        const {name,value} = event.target;
        setobj({...obj,[name]:value});
        // console.log(event.target.name);
    }
    async function find(){
        // const url = "http://localhost:2002/product/findgrower";

        // const servermsg=await axios.post(url,obj);
        // if(servermsg.data.status===true){
        //     alert(JSON.stringify(servermsg.data.grower));
        // }
        // else{
        //     alert(JSON.stringify(servermsg.data.err));
        // }


        const filtData =  compelete_data.filter((data)=>{
          return obj.city===data.city;
        }).filter((data)=>{
          return obj.pro_category === data.pro_category;
        })

        setFilteredData(
           filtData
          )


        console.log(filtData);

    }
  return (
    <>
    <div>
     <form class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
       <div class="flex w-full ">
           <div class=" ms-12 w-full py-10 px-5 md:px-10">
           <div class="text-center mb-5">
                {/* <RiShieldUserFill size={60} className="mx-auto mb-3 mt-[-6px]"></RiShieldUserFill> */}
                <h1 class="font-bold text-3xl text-gray-900">
                  Search Growers
                </h1>
              </div>
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2 mt-[-14px] ">
                <label
                  for="city"
                  class="block text-md font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div class="mt-2">
                <select name="pro_category" id="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset h-9 focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                onChange={doupdate}
                 >
                    <option value="Select">Select</option>
                    {   !categories ? <h1 className='text-3xl'>Loading</h1>  : 
                        categories.map((obj,index)=>{
                            return(<option  key={index} value={obj}>{obj}</option>)
                        })
                    }
                  </select>

                </div>
              </div>
              <div class="sm:col-span-2 mt-[-14px] ">
                <label
                  for="city"
                  class="block text-md font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div class="mt-2">
                <select name="city" id="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset h-9 focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                onChange={doupdate}
                 >
                    <option value="Select">Select</option>
                    {
                        combocities.map((obj,index)=>{
                            return(<option  key={index} value={obj}>{obj}</option>)
                        })
                    }
                  </select>
                  <button
            type="button"
            class="rounded-md md:ms-96 bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={find}
            // onClick={fetchcategory}
          >
            Growers
          </button> 
                </div>
              </div>
            </div>
          </div>
        </div> 
       </div>

      <div className="flex w-full">
          {
                filteredData.map((obj)=>
                {
                    return(
                    <Product_card {...obj}></Product_card>
                    )
                }
                )
            }
          </div>
      </form>
     </div>
    </>
  )
}

export default Grower