import React, { useEffect, useState } from 'react'
import { Validateaxios } from './services/user-controller'
import { CDash } from './dash-customer'
import { GDash } from './dash-Grower'
import { useNavigate } from 'react-router-dom'

export const Dash = () => {
    const navigate = useNavigate();
    const [usertype,setusertype]=useState("");
    useEffect(()=>{
            validationfunction();
    },[])


    async function validationfunction(){
        // const url = "http://localhost:2002/token/validation";
        const token = localStorage.getItem('token');

        if (token === null) {
            navigate('/signup');
        }

        const serverMsg= await Validateaxios();
        if(serverMsg.data.status===true){
        //   console.log(serverMsg.data.item.data.usertype);
        //    setData(serverMsg.data.retDoc);
        //    setcategories([...new Set(serverMsg.data.retDoc.map((obj)=>{return(obj.pro_category)}))]);    
        //    setcities([...new Set(serverMsg.data.retDoc.map((obj)=>{return(obj.city)}))]); 
        // alert(serverMsg.data.item.usertype);  
        setusertype(serverMsg.data.item.data.usertype);  
        }
        else    
            alert(JSON.stringify(serverMsg.data.err));
    }
  return(
    <>
        {
            usertype === "Grower" ? <GDash /> : <CDash />
        }

    </>
  )
}


