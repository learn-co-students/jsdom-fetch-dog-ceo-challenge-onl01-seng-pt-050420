console.log('%c HI', 'color: firebrick')

function fetchChallengeOne() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => {
        return res.json();
    })
    .then (json => {
        for (let i = 0; i < json.message.length; i++) {
            console.log(json.message[i]);
            let img = document.createElement('img');
            img.src = json.message[i];
            let src = document.getElementById("dog-image-container");
            src.appendChild(img);
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    fetchChallengeOne();
});














