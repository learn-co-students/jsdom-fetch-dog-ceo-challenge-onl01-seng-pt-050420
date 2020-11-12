console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    showImages();
    showBreeds();
  })
  
  function showImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  
    return fetch(imgUrl)
      .then(response => response.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }
  
  function addImage(pictureUrl) {
      const container = document.getElementById("dog-image-container");
      const newImage = document.createElement('img');
      newImage.src = pictureUrl;
      container.appendChild(newImage);
  }

  function showBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    
    return fetch(breedUrl)
        .then(response => response.json())
        .then(results => {
            const breeds = Object.keys(results.message);
            addBreeds(breeds);
        });
  }

  function addBreeds(breeds) {
      const ul = document.getElementById("dog-breeds");
      breeds.forEach(breed => {
          const li = document.createElement("li");
          li.innerText = breed
          ul.appendChild(li);
          li.addEventListener("click", function(click) {
              click.target.style.color = "red";
          });
      });
  }

  function dogFilter() {
      const filter = document.getElementById("breed-dropdown").value;
      showBreeds(filter);
  }


