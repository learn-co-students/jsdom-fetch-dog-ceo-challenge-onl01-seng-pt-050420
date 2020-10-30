document.addEventListener("DOMContentLoaded", () => {

    console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    
    function getImages() {
        fetch(imgUrl)
        .then(res => res.json())
        .then(res => grabImages(res));
    };
    
    function grabImages(res) {
        images = res.message;
        addImagesToDom(images);
    };

    function addImagesToDom(images) {
        imageElement = document.getElementById('dog-image-container');
        for (let i=0; i<images.length; i++) {
            newImg = document.createElement('img');
            newImg.src = images[i];
            imageElement.append(newImg);
        }
    };
    
    function getBreed() {
        fetch(breedUrl)
        .then(res => res.json())
        .then(res => grabBreeds(res));
    };
    
    function grabBreeds(res) {
        let breeds = Object.keys(res.message);
        addBreedsToDom(breeds);
    };

    function addBreedsToDom(breeds) {
        breedElement = document.getElementById('dog-breeds');
        for (let i=0; i<breeds.length; i++) {
            li = document.createElement('li');
            li.class = "breed-list-item";
            li.appendChild(document.createTextNode(breeds[i]));
            breedElement.append(li);
        }
    };
    
    document.getElementById('dog-breeds').addEventListener("click", function(event) {
        if (event.target && event.target.matches("li")) {
            if (event.target.style.color != "red") {
                event.target.style.color = "red";
            } else {
                event.target.style.color = "black";
            }          
        };
    }); 

    document.getElementById('breed-dropdown').addEventListener('change', function(event) {
        setFilter(event.target.value);
    });

    function setFilter(value) {
        console.log("set filter run");
        const li = document.getElementsByTagName('li');
        console.log(`value is ${value}`);
        for (let i = 0; i < li.length; i++) {
            console.log(`li value is ${li[i].innerText}`)
            if (value == "all") {
                li[i].style.display = "block";
                console.log("all selected");
            } else if (li[i].innerText[0] != value) {
                li[i].style.display = "none";
            } else {
                li[i].style.display = "block";
            }
        };
    };
       
    getImages();
    getBreed();

});




