console.log('%c HI', 'color: firebrick')

const imgUrl = `https://dog.ceo/api/breeds/image/random/4`

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs(){

   fetch(imgUrl)
    .then(resp => resp.json())
    .then(image => renderImage(image))
}


function renderImage(image){
    const imgContainer = document.getElementById("dog-image-container")    
    const imgTag = document.createElement("img")
    imgTag.src = image
    imgContainer.appendChild(imgTag)
    }
function fetchImages() {

    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => images.message.forEach(renderImage))
}

function fetchDogBreeds(){

    fetch(breedUrl)
     .then(resp => resp.json())
     .then(breed => console.log(breed))
 }
 fetchDogBreeds()

 function renderBreed(breed){
    const ul = document.getElementById("dog-breeds")    
    const li = document.createElement("li")
    li.innerText = breed

    ul.appendChild(li)
    li.addEventListener("click", function(e) {
        e.target.style.color = "purple";
      });

    }
function fetchBreeds() {

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => Object.keys(breeds.message).forEach(renderBreed))
}


fetchImages()
fetchBreeds()
