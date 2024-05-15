/* 
*  APIs imported here!!!
*/

import { loginFormListner } from "./handler/login.mjs";
import { signUpFormListner } from "./handler/register.mjs";

// import { API_SOCIAL_URL } from "./api/constants";
// import { API_REGISTER_URL } from "./api/register";

export async function router(){
    
    const urlPath = location.pathname;

    // switch (urlPath) {
    //     case "/":
    //         console.log("Home page");
    //         break;
    //     case "/register":
    //         signUpForm();
    //         break;
    //     default:
    //         break;
    // }
    if( urlPath === "/" || urlPath === "/index.html"){
       loginFormListner();
    }
    if(urlPath === "/register" || urlPath === "/register/index.html"){
        signUpFormListner();
    }
}

