import { updatePost } from "../api/auth/posts/update.mjs";

import { getPost } from "../api/auth/posts/fetchPost.mjs";


export async function updatePostbyId() {
    const form = document.querySelector('#edit-post');
    try {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const post = await getPost(id);
        // Title 
        const title = form.querySelector('#updateTextinput');
        title.value = post.title;

        // Message body
        const body = form.querySelector('#updateTextbox');
        body.value = post.body;

        // Media 
        const media = form.querySelector('#updateMedia');
        media.value = post.media;
        console.log(post);

        // Submit form
        form.addEventListener('submit', async (event) =>{
            event.preventDefault();
            const formData = new FormData(form);

            // Updating media variable with ternary operator
            const mediaImage = formData.get("media") 
                ? formData.get("media")
                :null;
            
            const updateformData = {
                id : id,
                title: formData.get('title'),
                body: formData.get('body'),
                mediaImage,
            };
             //Forward to  updatePost API
            updatePost(updateformData);
            // window.location.href = '/feed';
        });
        
    
    } catch (error) {
        console.log(error);
    }
}