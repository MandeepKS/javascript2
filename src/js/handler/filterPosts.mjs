import { getPosts } from "../api/auth/posts/fetchPost.mjs";
import { renderPostTemplate, postTemplate } from "../templates/post.mjs";


// THis function render all the posts with media 
export async function filterposts() {
    const withMedia = document.getElementById('withmediaposts');
    const allPosts = document.getElementById('allposts');
    const feedPosts = document.getElementById('feed-posts');
    const posts = await getPosts();

    withMedia.addEventListener('click', () =>{
        feedPosts.innerHTML = "";
        //filter out posts that have media
        const postsFilter = posts.filter(
          (post) => post.media !== "" && post.media !== null
        );
        renderPostTemplate(postsFilter);
    });

    // Shows all the posts
    allPosts.addEventListener('click', () =>{
        feedPosts.innerHTML = "";
        postTemplate();
    });
}