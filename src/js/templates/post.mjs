// This function creates Template for feeds post

import { getPosts } from "../api/auth/posts/fetchPost.mjs";
import { dateTime } from "../handler/dateTime.mjs";
import { load } from "../storage/index.mjs";


export async function postTemplate() {
   
    const {name} = load('profile');
    const posts = await getPosts();
    posts.map((post,i)=>{

        const id = post.id;

        //post updated date
        const postDate = dateTime(post.updated);
        document.getElementsByClassName('feed-posts');
        
        // Create the card container
        const card = document.createElement('div');
        card.className = 'feed-contents card mt-3';
    
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
        img.alt = `Created by ${post.author.name}`;
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
        profileLink.href = `/feed/post/?id=${id}`;
        profileLink.className = 'card-title lead fw-bold text-decoration-none';
        profileLink.textContent = '@'+post.author.name;
        col.appendChild(profileLink);
    
        /*****
        * Checking if author name is equal to user name,
        * then shows dropdown menu for edit or delete profile.  
        *****/
        if(post.author.name === name){
            // Create the dropdown button
            const button = document.createElement('button');
            button.id = 'userPostButton';
            button.setAttribute('aria-label', 'Edit Post');
            button.className = 'btn btn-outline-secondary border-0 float-end';
            button.setAttribute('data-bs-toggle', 'dropdown');
        
            const icon = document.createElement('i');
            icon.className = 'fa-solid fa-ellipsis-vertical';
            button.appendChild(icon);
            col.appendChild(button);

            // Create dropdown menu
            const dropdownMenu = document.createElement('ul');
            dropdownMenu.className = 'dropdown-menu';
        
            // Create dropdown items
            const items = [
                { text: 'Edit', href: `/feed/post/edit/?id=${id}`},
                { text: 'Delete', href: `/feed/post/delete/?id=${id}`},
            ];
        
            items.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'dropdown-item';
                a.href = item.href;
                a.textContent = item.text;
                li.appendChild(a);
                dropdownMenu.appendChild(li);
            });
        
            col.appendChild(dropdownMenu);
    
        }
        
        
    
    
        // Create the subtitle paragraph
        const subtitle = document.createElement('p');
        subtitle.className = 'card-subtitle fw-light';
        subtitle.textContent = postDate;
        col.appendChild(subtitle);
    
        // Create the card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);
        
        //Create the title 
        const postTitle = document.createElement('h4');
        postTitle.className = 'fw-bold h5 mb-0';
        postTitle.textContent = post.title;
        cardBody.appendChild(postTitle);

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
    });
   
}

export async function meidapostTemplate(filteredPost) {
    //Convert into Array, so i can use map function
    const posts = [filteredPost];
    const {name} = load('profile');
    posts.map((post)=>{

        const id = post.id;

        //post updated date
        const postDate = dateTime(post.updated);
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
        img.alt = `Created by ${post.author.name}`;
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
        profileLink.href = `/feed/post/?id=${id}`;
        profileLink.className = 'card-title lead fw-bold text-decoration-none';
        profileLink.textContent = '@'+post.author.name;
        col.appendChild(profileLink);
    
        /*****
        * Checking if author name is equal to user name,
        * then shows dropdown menu for edit or delete profile.  
        *****/
        if(post.author.name === name){
            // Create the dropdown button
            const button = document.createElement('button');
            button.id = 'userPostButton';
            button.setAttribute('aria-label', 'Edit Post');
            button.className = 'btn btn-outline-secondary border-0 float-end';
            button.setAttribute('data-bs-toggle', 'dropdown');
        
            const icon = document.createElement('i');
            icon.className = 'fa-solid fa-ellipsis-vertical';
            button.appendChild(icon);
            col.appendChild(button);

            // Create dropdown menu
            const dropdownMenu = document.createElement('ul');
            dropdownMenu.className = 'dropdown-menu';
        
            // Create dropdown items
            const items = [
                { text: 'Edit', href: `/feed/post/edit/?id=${id}`},
                { text: 'Delete', href: `/feed/post/delete/?id=${id}`},
            ];
        
            items.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'dropdown-item';
                a.href = item.href;
                a.textContent = item.text;
                li.appendChild(a);
                dropdownMenu.appendChild(li);
            });
        
            col.appendChild(dropdownMenu);
    
        }
        
        
    
    
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
        
        
        //Logic for media image only
        if(post.media !== null && post.media !== ""){

        const bodyImg = document.createElement('img');
        bodyImg.classList.add("w-100"),
        bodyImg.src = post.media;
        cardBody.appendChild(bodyText);
        cardBody.appendChild(bodyImg);
        }    
        // Append the card to the document body or any specific element
        document.getElementById('feed-posts').appendChild(card);
    });
   
}

export function renderPostTemplate(postFilteredData) {
    const filteredDataList = postFilteredData.filter(
        (postData) =>
          (postData.body !== null && postData.body !== "") ||
          (postData.media !== "" && postData.media !== null)
      );
    filteredDataList.map(meidapostTemplate);
}