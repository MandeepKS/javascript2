
export function searchFormListner() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const container = document.getElementById('feed-posts');
    
    if(searchForm){
        searchForm.addEventListener('submit',(event)=>{
            event.preventDefault();
            const searchformInput = searchInput.value.trim().toLowerCase();
            if(searchformInput === "") {
                searchInput.placeholder = "Enter something to search";
                return;
            }   
            const feedElements = container.querySelectorAll('.feed-contents');
            let matchFound = false;

            feedElements.forEach((feedElement)=>{
                const postTitle = feedElement
                                .querySelector("h4")
                                .textContent.toLowerCase();
                
                const postBody = feedElement.querySelector("p").textContent.toLowerCase();

                if(postTitle.includes(searchformInput) || postBody.includes(searchformInput)){
                    feedElement.style.display = 'block';
                    matchFound = true;
                    searchForm.reset();
                } else{
                    feedElement.style.display = 'none';
                }
            } );
        });
    }
}
