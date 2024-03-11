// import gallery array
import { gallery } from "../data/gallery.js";

//ajax request to get galler array 
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if(xhr.status === 200) {
      let galleryHTML = "";

      // loop through gallery array 
      gallery.forEach((image) => {
        galleryHTML += `
          <li id="img-container" class="list-group-item col-4 col-md-3 col-lg-2">
            <button class="img-toggle">
              <img src="${image.src}" class="img-fluid">
            </button>
          </li>
        `;
      });

      // generate html <li> items into the <ul>
      document.querySelector('.js-row-img-container')
        .innerHTML = galleryHTML;

      // use jQuery to toggle the modal through clicking thumbnails
      $(document).ready(function() { 
        $(".img-toggle").on("click", () => {
          $("#modal-container").fadeIn();      
          imgToggleBuild();  
        });

        $(".img-toggle").on("blur", () => {
          $("#modal-container").fadeOut(); 
        })

      });

      // create function to generate modal dynamically
      function imgToggleBuild () {
        let imgToggleHTML = "";

        gallery.forEach((image) => {
          imgToggleHTML += `
              <div class="img-modal-content">
                <img src="${image.src}" class="img-fluid"> 
              </div>   
          `;
        
        document.querySelector('#modal-container')
          .innerHTML = imgToggleHTML; 

        });
      }

    } else {
      console.log('There was a problem with the request');
    };
  };
};

xhr.open('GET', "https://mirco-98.github.io/gallery-database/gallery.json");
xhr.send();
