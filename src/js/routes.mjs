/* 
*  APIs imported here!!!
*/


import { createPostFormListner } from "./handler/createPost.mjs";
import { deletePostbyId } from "./handler/deletePost.mjs";
import { loginFormListner } from "./handler/login.mjs";
import { signUpFormListner } from "./handler/register.mjs";
import { updatePostbyId } from "./handler/updatePost.mjs";
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
    if(urlPath === "/feed/post/delete/" || urlPath === "/feed/post/delete/index.html"){
        deletePostbyId();
    }
    if(urlPath === "/feed/post/edit/" || urlPath === "/feed/post/edit/index.html"){
        updatePostbyId();
    }
}

