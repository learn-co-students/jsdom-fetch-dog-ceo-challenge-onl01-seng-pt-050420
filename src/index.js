// Challenge 1

window.addEventListener('DOMContentLoaded', () => {
    fetchImg();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImg(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImg(json));
};

function renderImg(image) {
  image.message.forEach(image => {
      let dogImageContainer = document.getElementById('dog-image-container');
      let element = document.createElement('img');
      element.src = image;
      dogImageContainer.appendChild(element);
  })
}


// Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'