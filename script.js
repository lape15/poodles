
const mainImg = document.querySelector('#main');
const loader = document.querySelector('#loader');
const dogBreed = document.querySelector('#breed');

const DOG_URL = "https://dog.ceo/api/breeds/list/all"

fetch(DOG_URL)
    .then(response =>response.json())
    .then(function(data){
        const dogArray = Object.keys(data.message);
        for(let i = 0; i < dogArray.length; i++){
        const option = document.createElement('option');
        option.value = dogArray[i];
        option.innerText = dogArray[i];
        dogBreed.appendChild(option)
       }
    });


    dogBreed.addEventListener('change', handleChange);

    mainImg.addEventListener('load', function() {
       loader.classList.remove = ('show');
       mainImg.classList.add = ('show');
      });
    

     function handleChange(e) {
        
        loader.classList.add = ('show')
        mainImg.classList.remove = ('show');
        const dog = e.target.value;
        const url = (`https://dog.ceo/api/breed/${dog}/images/random`)

       fetch(url)
            .then(res => res.json())
            .then(data => {
                mainImg.src =  data.message
               
            })
    }

