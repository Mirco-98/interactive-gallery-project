// import gallery array
import { gallery } from "../data/gallery.js";

// create variable to store the images
let galleryHTML = '';

// loop through gallery array 
gallery.forEach((image) => {
  galleryHTML += `
    <li id="img-container" class="list-group-item col-4 col-md-3 col-lg-2">
      <img src="${image.src}" class="img-fluid">
    </li>
  `;
});

// generate html <li> items into the <ul>
document.querySelector('.js-row-img-container')
  .innerHTML = galleryHTML;

