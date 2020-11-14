const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

fetch(imgUrl)
.then(resp => resp.json())
.then(json => showImages(json));

fetch(breedUrl)
.then(resp => resp.json())
.then(json => listBreed(json));

function showImages(images) {
    const imgContainer = document.getElementById("dog-image-container")
    
    images.message.forEach(img => {
        const imgTag = new Image(300, 300)
        // console.log(imgTag)
        imgTag.src = img
        // console.log(imgTag)
        imgContainer.appendChild(imgTag)
    })
};

function listBreed(breeds) {
    const list = document.getElementById("dog-breeds");
    const breed = breeds.message;

    for(type in breed){
        const li = document.createElement('li');
        
        li.innerHTML = type;

        li.addEventListener('click', function(){ this.style.color = 'purple' });
        list.appendChild(li);
    };
    
}; 


function showSelectedBreed() {
    const dropdown = document.getElementById('breed-dropdown');
    let selection = dropdown.value;
    const list = document.getElementById("dog-breeds");
    let li = list.getElementsByTagName('li');

    for(i = 0; i< li.length; i++) {
        firstLetter = li[i].textContent[0];
        if (firstLetter.indexOf(selection) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
};