import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../autoFetch.mjs";

const action = '/posts';
const author = '_author=true';
const comments = '&_comments=true';
const reactions = '&_reactions=true';


/** 
* Fetches all the posts from DB
**/

//Fetch all the posts
export async function getPosts() {
    try {
        const getPostsURL = `${API_SOCIAL_URL}${action}?${author}${comments}${reactions}`;
        const response = await authFetch(getPostsURL,{
            method : 'GET',
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

//Fetch a  single post by id 
export async function getPost(id) {
    try {
        const getPostsURL = `${API_SOCIAL_URL}${action}/${id}?${author}`;
        const response = await authFetch(getPostsURL,{
            method : 'GET',
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}