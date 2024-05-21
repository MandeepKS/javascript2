import { deletePost } from "../api/auth/posts/deletePost.mjs";

/**
 * THis function handle the delete operation 
 * Its, get the id from url and forward to deletePost()
 **/
export function deletePostbyId() {
    try {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
         return deletePost(id);
    } catch (error) {
        console.log(error);
    }
}