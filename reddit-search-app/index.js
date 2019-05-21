import reddit from './redditapi';
import snoo from './snoo.jpg';

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// Form Event Listener
searchForm.addEventListener("submit", e => {
   // Get search term
   const searchTerm = searchInput.value;
   console.log(searchTerm);
   // Get sort
   const sortBy = document.querySelector('input[name="sortby"]:checked').value;
   console.log(sortBy);
   // Search limit
   const searchLimit = document.getElementById("limit").value;
   console.log(searchLimit);

   //   Check input
   if (searchTerm === "") {
      //   Show message
      showMessage("Please add a search term", "alert-danger");
      //  Please add.. is the 'message' parameter, alert-danger is the 'className' parameter underneath
   }

   //   Clear search input
   searchInput.value = "";

   //   Search reddit
   reddit.search(searchTerm, searchLimit, sortBy).then(results => {
      let output = '<div class="card-columns">';
      // Loop through posts
      results.forEach(post => {

         // Check for image
         const image = post.preview ? post.preview.images[0].source.url : snoo;

         output += `<div class="card">
         <img class="card-img-top" src="${image}" alt="Card image cap">
         <div class="card-body">
           <h5 class="card-title">${post.title}</h5>
           <p class="card-text">${truncateText(post.selftext, 100)+ '...'}</p>
           <a href="${post.url}" class="btn btn-danger">More</a>
         </div>
       </div>`
      })
      output += '</div>'
      document.getElementById("results").innerHTML = output;
      console.log(results)
   });

   e.preventDefault();
});

// Show Message
function showMessage(message, className) {
   // Create div
   const div = document.createElement("div");
   // Add classes
   div.className = `alert ${className}`;
   //   Add text
   div.appendChild(document.createTextNode(message));
   //   Get parrent container
   const searchContainer = document.getElementById("search-container");
   // Get search
   const search = document.getElementById("search");
   // Insert message
   searchContainer.insertBefore(div, search); // insert the div element before the search

   // timeout alert div
   setTimeout(() => div.remove(), 2000);
}

// Truncate text
function truncateText(text, limit) {
   const shortend = text.indexOf(' ', limit); //if indexOf doesn't match a space, it will return a -1
   if (shortend == -1) return text;
   return text.substring(0, shortend);
}