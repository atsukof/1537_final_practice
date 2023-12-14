console.log("Hello World!");

// when the list is clicked, the fruit name will appear in the result
document.querySelector(".fruitList").addEventListener('click', function (event) {
    console.log('clicked');
    document.querySelector('#result').innerHTML = "";
    const fruitsName = event.target.innerText
    console.log(fruitsName);
    document.querySelector('#result').innerHTML = `<p class="selectedFruit">${fruitsName}</p>`;
})

// when the animal list is clicked, the animal name will disappear in the list, and appear in the result
document.querySelector(".animalList").addEventListener('click', function (event){
    console.log('animal list clicked');
    const animalName = event.target.innerText;
    event.target.style.display = "none";
    console.log(animalName);
    document.getElementById('resultAnimal').innerHTML = `<p class="selectedAnimal">${animalName} is selected</p>`;
});

// when the reset button is clicked, the animal list will appear again
document.querySelector("#resetButton").addEventListener('click', function (event){
    console.log('reset button clicked');
    const animalList = document.querySelectorAll('.animalList li');
    console.log(animalList);
    animalList.forEach(function(animal){
        animal.style.display = "block";        
    })
});
