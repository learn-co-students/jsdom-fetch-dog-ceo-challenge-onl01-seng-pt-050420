document.addEventListener('DOMContentLoaded', function() {
  let allBreeds = []
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogImgContainer = document.getElementById('dog-image-container')
  const breedDp = document.getElementById('breed-dropdown')
  const dogBreedUl = document.getElementById('dog-breeds')

  fetchImgs()
  fetchBreeds()
  function fetchImgs() {
    return fetch( imgUrl )
      .then(resp => resp.json())
      .then(json => renderImgs(json));
  }


  function fetchBreeds() {
    return fetch( breedUrl )
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
  }

  function renderImgs(imgs) {
    imgs.message.forEach(imgUrl => {
      const pic = document.createElement('ul')
      pic.innerHTML = `<img src="${imgUrl}">`
      dogImgContainer.appendChild(pic)
    })

    const dogImgString = imgs.message.map((imgUrl) =>{
      return `<img src="${imgUrl}>`
    })
  }


  function renderBreeds(breeds) {
    allBreeds = Object.keys(breeds.message)
    dogBreedUl.innerHTML = createBreedList(allBreeds)
  }

function createBreedList(breedArray) {
  const breedList = breedArray.map(function(breed){
    return `<li>${breed}</li>`
  })
  return breedList.join('')
}

dogBreedUl.addEventListener('click', function(event) {
  event.target.style.color = 'red'
})

breedDp.addEventListener('change', (event) =>{
  const letter = event.target.value

  const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(letter))
  dogBreedUl.innerHTML = createBreedList(filteredBreeds)
  })
})

console.log('%c HI', 'color: firebrick')
