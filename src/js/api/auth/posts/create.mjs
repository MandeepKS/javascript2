import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../autoFetch.mjs";
const action = "/posts";
const createPostUrl = API_SOCIAL_URL + action;

//Create Post
export  async function createPost(postData) {
    try {
        
        const response = await authFetch(createPostUrl,{
            method:'POST',
            body: JSON.stringify(postData),
        });
            // Handle error
		if (!response.ok) {
			const errorData = await response.json();
            console.error('Error:', errorData);
            throw new Error(errorData.message || 'Failed to create post');
		}
            //Handle sucess
            const result =  await response.json();
            console.log('Success: ',result);
            return result;
    } catch (error) {
        console.error('Catch Error:', error.message);
        throw error;
    }
}