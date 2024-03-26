import { privateReq, publicAxios} from "./url-config";

const Signupaxios=(obj)=>
{
        return publicAxios.post(`user/signup`,obj);
}

const Loginaxios=(obj)=>
{
        return publicAxios.post(`user/login`,obj);
}

const Validateaxios=()=>
{
        return privateReq.post("/token/validation");
}

export {Signupaxios,Loginaxios,Validateaxios};