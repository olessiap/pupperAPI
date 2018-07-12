//make url variable
//make doggo DOM variable
//make addNewDoggo function with a promise chain
//fetch dog_url in a promise const
//.then response parameter
//processingResponse variable with .json()
//.then use processedResponse to 
//create a new image element
//set src 
//attach it to doggos DOM variable
//add event listener to button

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector('.doggos');

function addNewDoggo() {
    const promise = fetch(DOG_URL)
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise; 
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "cute dog";
            doggos.appendChild(img);
        });
    }

document.querySelector('.newDoggo').addEventListener('click', addNewDoggo);