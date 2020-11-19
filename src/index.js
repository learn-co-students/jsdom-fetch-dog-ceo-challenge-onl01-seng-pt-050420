window.addEventListener('DOMContentLoaded', () => {
    fetchImg();
    fetchBreed();
});


// Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImg(){
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImg(json));
};

function renderImg(image){
  image.message.forEach(image => {
      let dogImageContainer = document.getElementById('dog-image-container');
      let element = document.createElement('img');
      element.src = image;
      dogImageContainer.appendChild(element);
  })
}


// Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreed(){
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreed(json));
};

function renderBreed(breed){
    console.log(breed.message);
    Object.keys(breed.message).forEach(breed => {
        let breedContainer = document.getElementById('dog-breeds');
        let element = document.createElement('li');
        element.innerText = breed; 
        breedContainer.appendChild(element);
    })
}


// Challenge 3

