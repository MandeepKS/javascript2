/* 
*  APIs imported here!!!
*/


import { createPostFormListner } from "./handler/createPost.mjs";
import { deletePostbyId } from "./handler/deletePost.mjs";
import { filterposts } from "./handler/filterPosts.mjs";
import { loginFormListner } from "./handler/login.mjs";
import { signUpFormListner } from "./handler/register.mjs";
import { searchFormListner } from "./handler/searchForm.mjs";
import { updatePostbyId } from "./handler/updatePost.mjs";
import { postTemplate } from "./templates/post.mjs";
import { singlepostTemplate } from "./templates/singlePostTemp.mjs";

// import { API_SOCIAL_URL } from "./api/constants";
// import { API_REGISTER_URL } from "./api/register";

export async function router(){
    
    const urlPath = location.pathname;

    if( urlPath === "/" || urlPath === "/index.html"){
       loginFormListner();
    }
    if(urlPath === "/register/" || urlPath === "/register/index.html"){
        signUpFormListner();
    }
    if(urlPath === "/feed/" || urlPath === "/feed/index.html"){
        createPostFormListner();
        postTemplate();
        filterposts();
        searchFormListner();
    }
    if(urlPath === "/feed/post/delete/" || urlPath === "/feed/post/delete/index.html"){
        deletePostbyId();
    }
    if(urlPath === "/feed/post/edit/" || urlPath === "/feed/post/edit/index.html"){
        updatePostbyId();
    }

    if(urlPath === "/feed/post/" || urlPath === "/feed/post/index.html"){
       singlepostTemplate();
    }

    if(urlPath === "/feed/?" || urlPath === "/feed/index.html"){
       searchFormListner();
    }
    
}

