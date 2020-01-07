
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
        mainImg.classList.add('show');
        loader.classList.remove('show');
      });
    

     function handleChange(e) {
        mainImg.classList.remove = ('show');
        loader.classList.add = ('show')
        const dog = e.target.value;
        const url = (`https://dog.ceo/api/breed/${dog}/images/random`)

       fetch(url)
            .then(res => res.json())
            .then(data => {
                mainImg.src =  data.message
            })
    }

