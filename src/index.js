console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

let dropdown = document.querySelector('#breed-dropdown')

function fetchImages() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json.message.forEach(image => createImages(image)))
}

function createImages(image) {
    let container = document.getElementById('dog-image-container')
    let newImage = document.createElement('img')
    newImage.src = image
    container.appendChild(newImage)
}

function fetchBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => {
            breeds = Object.keys(results.message);
            listBreeds(breeds)
        })
}

function listBreeds(breed) {
    breeds.forEach(breed => {
        let list = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.innerText = breed
        li.addEventListener('click', function(e) {
            e.target.style.color = 'red'
        })
        list.appendChild(li)
    })
}


document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
})

dropdown.addEventListener('change', function(e) {
    selectBreedsStartingWith(e.target.value)
})

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}