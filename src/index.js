document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dropdown = document.querySelector('#breed-dropdown')

function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => json.message.forEach(image => renderImage(image)))
}
  
function renderImage(image) {
    const img_cont = document.getElementById('dog-image-container')
    let newImg = document.createElement('img')
    newImg.src = image
    img_cont.appendChild(newImg)
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        let breeds = Object.keys(json.message);
        renderBreeds(breeds)
    }) 
}

dropdown.addEventListener('change', function(e) {
    selectBreeds(e.target.value)
})

function renderBreeds(breeds) {
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
