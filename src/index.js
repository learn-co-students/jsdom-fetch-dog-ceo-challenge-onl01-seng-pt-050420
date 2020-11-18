console.log('%c HI', 'color: firebrick')

let breeds = [];

document.addEventListener("DOMContentLoaded", function () {
  getImages();
  getBreedOptions();
});

function getImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(result => { 
      result.message.forEach(image => addImage(image))
    });
}

function addImage(dogImgUrl) {
  let container = document.querySelector('#dog-image-container');
  let createElement = document.createElement('img');
  createElement.src = dogImgUrl;
  container.appendChild(createElement);
}


