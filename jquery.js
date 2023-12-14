function setup() {
    console.log("Hello World!");
    // if clicked, the fruit list will appear in the result
    $('.fruitList').on('click', 'li', function () {
        console.log('clicked');
        $('#result').empty();
        const fruitsName = $(this).text()
        $('#result').append(`<p class="selectedFruit">${fruitsName}</p>`);
    });

}


$(document).ready(setup)