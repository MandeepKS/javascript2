import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../autoFetch.mjs";

const action = "/posts";


/** 
* THis function updates the post with object
* 
* @returns {promise} The result of the update post 
**/


 export async function updatePost(updatePostData) {
    const updatePostURL = `${API_SOCIAL_URL}${action}/${updatePostData.id}`;
    
    try {
        if(!updatePostData.id) throw new Error('Post Id is required');

        const response = await authFetch(updatePostURL,{
            method:'PUT',
            body:JSON.stringify(updatePostData),
        });
            await response.json();
            return window.location.href = '/feed';
    } catch (error) {
        console.error("Error updating profile:", error);
    }
}