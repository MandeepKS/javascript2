import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../autoFetch.mjs";

const action = "/posts";
const method = '';

/** 
* THis function removes the post with id
* @param {string} id -THe id of post
* @returns {promise} The result of the delete 
**/

export async function deletePost(id) {

    const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;
    try {
         if(!id) throw new Error("Delete request requires a post Id");
         const response = await authFetch(deletePostURL,{
            method:'DELETE',
         });
         return window.location.href = '/feed';
    } catch (error) {
        console.log(error);
    }
}