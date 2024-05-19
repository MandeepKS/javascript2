/* 
*  APIs imported here!!!
*/

import { getPosts } from "./api/auth/posts/fetchPost.mjs";
import { createPostFormListner } from "./handler/createPost.mjs";
import { loginFormListner } from "./handler/login.mjs";
import { signUpFormListner } from "./handler/register.mjs";
import { postTemplate } from "./templates/post.mjs";

// import { API_SOCIAL_URL } from "./api/constants";
// import { API_REGISTER_URL } from "./api/register";

export async function router(){
    
    const urlPath = location.pathname;

    // switch (urlPath) {
    //     case "/":
    //         loginFormListner();
    //         break;
    //     case "/register":
    //         signUpFormListner();
    //         break;
    //        case "/feed":
    //         
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
    if(urlPath === "/feed/" || urlPath === "/feed/index.html"){
        createPostFormListner();
        postTemplate();
    }
}

