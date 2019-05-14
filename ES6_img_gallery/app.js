const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img"); //select the class and all img (tags) inside
const opacity = 0.4;

// Set the first img's opacity to const opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opacity of all images
  imgs.forEach(img => (img.style.opacity = 1));
  // Change current image to src of clicked img
  current.src = e.target.src;

  // Add .fade-in class to current img
  current.classList.add("fade-in");

  //   Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 300);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
