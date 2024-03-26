import {publicAxios} from "./url-config";

const saveprofile=(obj,header)=>
{
        return publicAxios.post(`/profile/save`,obj,header);
}
const updateprofile=(obj,header)=>
{
        return publicAxios.post(`/profile/update`,obj,header);
}
const searchprofile=(obj,header)=>
{
        return publicAxios.post(`/profile/search`,obj,header);
}

export {saveprofile,updateprofile,searchprofile};