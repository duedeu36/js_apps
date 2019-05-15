const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

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
  e.preventDefault();
});
