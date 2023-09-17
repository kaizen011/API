const img = document.querySelector('img');
   const lion = document.createElement('img');
   const jackson = document.getElementById('jackson');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=eb6bSqO0MSiDl6pYbGeT773mM5ypqdTA&s=dog', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });


    // Button Click for lion
    jackson.addEventListener('click',function(){
      fetch('https://api.giphy.com/v1/gifs/translate?api_key=eb6bSqO0MSiDl6pYbGeT773mM5ypqdTA&s=lion', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      lion.src = response.data.images.original.webp;
      document.body.appendChild(lion);
    });
    })
const apiKey = 'eb6bSqO0MSiDl6pYbGeT773mM5ypqdTA';
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const gifContainer = document.getElementById('gif-container');
const errorMessage = document.getElementById('error-message');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        searchGifs(searchTerm);
    }
});



// Search gif api
function searchGifs(query) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                displayGifs(data.data);
            } else {
                displayErrorMessage();
            }
        })
        .catch(error => {
            console.error(error);
            displayErrorMessage();
        });
}

function displayGifs(gifs) {
  const limit = 3; 
let count = 0;
    gifContainer.innerHTML = '';
    
    while(limit > count){
      gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        gifContainer.appendChild(img);
    });
    errorMessage.classList.add('hidden');
    count+=1;
  }
    
}

function displayErrorMessage() {
    gifContainer.innerHTML = '';
    errorMessage.classList.remove('hidden');
}