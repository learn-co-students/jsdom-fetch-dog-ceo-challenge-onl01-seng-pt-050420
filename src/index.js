// console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', () => {
    fetchImg();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

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