console.log('%c HI', 'color: firebrick')

function imageFetch(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(resp){
        return resp.json()
    })
    .then(function(imageurls){
        renderImages(imageurls)
    })
}



    
const dogList = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("#breed-dropdown")


let breedList = []


  dropdown.addEventListener("change", event => {

  const letter = event.target.value
  
 
  const filteredBreeds = breedList.filter(function(breed) {
    return breed.startsWith(letter)
  })
  
  dogList.innerHTML = ''
  

  filteredBreeds.forEach(function(breed) {
    renderBreed(breed)
  })
  
  console.log(filteredBreeds)
  
 
  dogList.querySelectorAll("li").forEach(li => {
 
    if (!li.textContent.startsWith(letter)) {
    
      li.style.display = "none"
    } else {
      li.style.display = ""
    }
  })
})


dogList.addEventListener("click", event => {
 
  if (event.target.matches("li")) {
    
    event.target.style.color = "red"
  }
})

function renderImage(imageUrl) {
  const img = document.createElement("img")
  img.src = imageUrl
  const imageContainer = document.querySelector("#dog-image-container")
  imageContainer.append(img)
}

function renderAllImages(data) {
 
  const images = data.message
  
  
  images.forEach(imageUrl => {
    renderImage(imageUrl)
  })
}

function loadImages() {
 
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(renderAllImages())
  }


function renderBreed(breed) {
  const li = document.createElement("li")
  li.textContent = breed
  dogList.append(li)
}

function loadBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
     
      breedList = Object.keys(data.message)
      
      breedList.forEach(breed => {
        renderBreed(breed)
      })
    })
}

loadBreeds()
loadImages()