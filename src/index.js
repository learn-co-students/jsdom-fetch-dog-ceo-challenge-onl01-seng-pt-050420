const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

fetch(imgUrl)
.then(resp => resp.json())
.then(json => showDogImages(json));

fetch(breedUrl)
.then(resp => resp.json())
.then(json => showDogBreed(json));

function showDogImages(images) {
    const dogImageContainer = document.getElementById("dog-image-container")
    images.message.forEach(image=> {
    let imageTag = new Image (356.9, 356)
    imageTag.src = image
    dogImageContainer.appendChild(imageTag)
})

};



function showDogBreed(breeds) {   
    let ul = document.getElementById("dog-breeds")
    breeds = Object.keys(breeds.message) 
    const li = document.createElement('li')
        insertBreed(breeds)
    let breedDropdown = document.getElementById('breed-dropdown')
    breedDropdown.addEventListener('change', function (e) {
        const filteredBreeds = breeds.filter(breed => breed.startsWith(e.target.value))
        removeChildren(ul)
        insertBreed(filteredBreeds)
        })
}

function removeChildren (element){
    while(element.children.length > 0){
        element.removeChild(element.children[0])
    }
}

function insertBreed(breed){
    let ul = document.getElementById("dog-breeds")
    breed.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed  
        ul.appendChild(li)
        li.addEventListener('click', updateColor)
    })
}
 

function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }



