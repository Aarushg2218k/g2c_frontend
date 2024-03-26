import { publicAxios } from "./url-config";

const addproduct=(obj)=>{
    return publicAxios.post("/product/add",obj);
}
const manageproduct=(obj)=>{
    return publicAxios.post("/product/manage",obj);
}
const findgrower=()=>{
    return publicAxios.post("/product/fetchcategory");
}

export {addproduct,manageproduct,findgrower};