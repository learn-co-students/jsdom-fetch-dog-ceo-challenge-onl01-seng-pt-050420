let listOfDogs = [];

function setInitialDogList(breeds) {
    for (let breed in breeds) {
        if (breeds[breed].length === 0) {
            listOfDogs.push(breed)
        } else {
            breeds[breed].forEach(function(detail) {
                listOfDogs.push(`${detail} ${breed}`)
            })
        }
    }
}

function setFilterOptions() {
    const select = document.getElementById("breed-dropdown")
    select.addEventListener('change', function(e) {
        const dogs = document.getElementsByClassName('dog-breed')
        console.log('dogs', dogs)
        for (let i=0; i<dogs.length; i++) {
            if (dogs[i].innerHTML.toLowerCase().startsWith(e.target.value)) {
                dogs[i].style.display = 'block'
            } else {
                dogs[i].style.display = 'none'
            }
        }
})
}

function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      renderDogImages(json.message);
    });
  }
  
  function renderDogImages(images) {
    const dogImageContainer = document.getElementById('dog-image-container')
    images.forEach(image => {
      const img = document.createElement('img')
      img.src = image
      dogImageContainer.appendChild(img)
    })
  }

  function fetchDogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        setInitialDogList(json.message);
      renderDogBreeds();
    });
  }

  function renderDogBreeds() {
    const dogBreeds = document.getElementById('dog-breeds')
    listOfDogs.forEach(dog => {
        const li = document.createElement('li');
        li.className = 'dog-breed'
        li.innerHTML = dog;
        li.addEventListener('click', function() { changeTextColor(li) })
        dogBreeds.appendChild(li);
    })

    function changeTextColor(element) {
        return element.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchDogBreeds();
    setFilterOptions();
  })