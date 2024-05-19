import { createPost } from "../api/auth/posts/create.mjs";
import { load } from "../storage/index.mjs";

// This function listen the html request from feed post
export function createPostFormListner() {
    const postForm = document.getElementById('create-post');
    //fetch user info from storage (load) function
    const user = load('profile');
    
    if(postForm){
        postForm.addEventListener("submit",(event)=>{
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);

            // Creating media variable with ternary operator
            const media = formData.get("media") 
                        ? formData.get("media")
                        :null;
            
            
            const postformData = {
                title: user.name,
                body: formData.get('body'),
                media,
            };
            
            //Forward to  createpost API
            createPost(postformData);
            postForm.reset();
        });
    }
  
   
}