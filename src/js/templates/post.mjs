// This function creates Template for feeds post

import { getPosts } from "../api/auth/posts/fetchPost.mjs";
import { dateTime } from "../handler/dateTime.mjs";

export async function postTemplate() {
    const posts = await getPosts();
    console.log(posts);
    const post = posts[10];
    const postDate = dateTime(post.updated);
    console.log(post);
    document.getElementsByClassName('feed-posts');
    // Create the card container
    const card = document.createElement('div');
    card.className = 'card mt-3';

    // Create the card header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    card.appendChild(cardHeader);

    // Create the row
    const row = document.createElement('div');
    row.className = 'row flex-row';
    cardHeader.appendChild(row);

    // Create the col-auto for the profile image
    const colAuto = document.createElement('div');
    colAuto.className = 'col-auto';
    row.appendChild(colAuto);

    // Create the profile image
    let avatar = post.author.avatar;
    
    //check if avatar is null or not
    avatar = avatar === null ? avatar = 'https://i.pravatar.cc/150?img=2' : avatar;
    const img = document.createElement('img');
    img.src = avatar;
    img.alt = 'profile';
    img.className = 'rounded-circle';
    img.height = 50;
    img.width = 50;
    colAuto.appendChild(img);

    // Create the col for the profile info
    const col = document.createElement('div');
    col.className = 'col';
    row.appendChild(col);

    // Create the profile link
    const profileLink = document.createElement('a');
    profileLink.href = '/profile/';
    profileLink.className = 'card-title lead fw-bold text-decoration-none';
    profileLink.textContent = '@'+post.author.name;
    col.appendChild(profileLink);

    // Create the subtitle paragraph
    const subtitle = document.createElement('p');
    subtitle.className = 'card-subtitle fw-light';
    subtitle.textContent = postDate;
    col.appendChild(subtitle);

    // Create the card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    // Create the card body paragraph
    const bodyText = document.createElement('p');
    bodyText.textContent = post.body;
    
    //Post body image 
    const bodyImg = document.createElement('img');
    
    //Logic if media is without image 
    if(post.media === null) post.media = ""; 
    
    bodyImg.classList.add("w-100"),
    bodyImg.src = post.media;
    cardBody.appendChild(bodyText);
    cardBody.appendChild(bodyImg);

    // Append the card to the document body or any specific element
    document.getElementById('feed-posts').appendChild(card);


}