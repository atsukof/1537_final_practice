
// use the following array of unicorns to complete the tasks below
const unicorns = [
    {
        "_id": "641ba4876574593f27ad4323",
        "name": "Horny",
        "dob": "1992-03-13T15:47:00.000Z",
        "loves": [
            "carrot",
            "papaya"
        ],
        "weight": 600,
        "gender": "m",
        "vampires": 63,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad4324",
        "name": "Aurora",
        "dob": "1991-01-24T21:00:00.000Z",
        "loves": [
            "carrot",
            "grape",
            "sugar"
        ],
        "weight": 450,
        "gender": "f",
        "vampires": 43,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad4325",
        "name": "Unicrom",
        "dob": "1973-02-10T06:10:00.000Z",
        "loves": [
            "energon",
            "redbull"
        ],
        "weight": 984,
        "gender": "m",
        "vampires": 182,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad4326",
        "name": "Roooooodles",
        "dob": "1979-08-19T01:44:00.000Z",
        "loves": [
            "apple"
        ],
        "weight": 575,
        "gender": "m",
        "vampires": 99,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad4327",
        "name": "Solnara",
        "dob": "1985-07-04T09:01:00.000Z",
        "loves": [
            "apple",
            "carrot",
            "chocolate"
        ],
        "weight": 550,
        "gender": "f",
        "vampires": 80,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad4328",
        "name": "Ayna",
        "dob": "1998-03-07T16:30:00.000Z",
        "loves": [
            "strawberry",
            "lemon"
        ],
        "weight": 733,
        "gender": "f",
        "vampires": 40,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad4329",
        "name": "Kenny",
        "dob": "1997-07-01T17:42:00.000Z",
        "loves": [
            "grape",
            "lemon"
        ],
        "weight": 690,
        "gender": "m",
        "vampires": 39,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad432a",
        "name": "Raleigh",
        "dob": "2005-05-03T07:57:00.000Z",
        "loves": [
            "apple",
            "sugar"
        ],
        "weight": 421,
        "gender": "m",
        "vampires": 2,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad432b",
        "name": "Leia",
        "dob": "2001-10-08T21:53:00.000Z",
        "loves": [
            "apple",
            "watermelon"
        ],
        "weight": 601,
        "gender": "f",
        "vampires": 33,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad432c",
        "name": "Pilot",
        "dob": "1997-03-01T13:03:00.000Z",
        "loves": [
            "apple",
            "watermelon"
        ],
        "weight": 650,
        "gender": "m",
        "vampires": 55,
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad432d",
        "name": "Nimue",
        "dob": "1999-12-21T00:15:00.000Z",
        "loves": [
            "grape",
            "carrot"
        ],
        "weight": 540,
        "gender": "f",
        "vaccinated": true
    },
    {
        "_id": "641ba4876574593f27ad432e",
        "name": "Dunx",
        "dob": "1976-07-19T01:18:00.000Z",
        "loves": [
            "grape",
            "watermelon"
        ],
        "weight": 704,
        "gender": "m",
        "vampires": 165,
        "vaccinated": true
    }
]

// create a set to store the food list
const foodList = new Set();

const setup = () => {
    console.log("Hello World!");
    getFoodList(unicorns);
    displayFoodList(foodList);
    // add event listener when clicking on a food item

    // この関数の呼び方はなに？
    $("#foodList").on("click", "li", function() {
        const food = $(this).text();
        console.log(food);
        // clear the list of unicorns
        $("#unicorns").empty();
        // filter the unicorns that love the selected food
        // filter関数の使い方を復習する. include以外に何がある？
        filteredUnicorns = unicorns.filter(unicorn => unicorn.loves.includes(food));

        // display the filtered unicorns
        // 関数の呼び方はこれで良いのか？
        displayUnicorns(filteredUnicorns);
    });

    $("#unicorns").on("click", "li", function() {
        // get the details of the unicorn
        const unicornName = $(this).text();
        getUnicornDetails(unicornName);
    });
}
function getFoodList(unicorns) {
    unicorns.forEach(unicorn => {
        unicorn.loves.forEach(food => {
            foodList.add(food);
        });
    });
}

function displayFoodList(foodList) {
    foodList.forEach(food => {
        $("#foodList").append(`<li>${food}</li>`);
          });
}

function displayUnicorns(unicorns) {
    unicorns.forEach(unicorn =>
        $("#unicorns").append(`<li>${unicorn.name}</li>`)
    );
}

function getUnicornDetails(unicornName) {
    $("#unicornDetails").empty();
    const unicornDetail = unicorns.filter(unicorn => unicorn.name === unicornName);
    unicornDetail.forEach(unicorn => {
        let unicornName = unicorn.name;
        let unicornDob = unicorn.dob;
        let unicornWeight = unicorn.weight;
        $("#unicornDetails").append(`<p>Name: ${unicornName}</p>`);
        $("#unicornDetails").append(`<p>DOB: ${unicornDob}</p>`);
        $("#unicornDetails").append(`<p>Weight: ${unicornWeight}</p>`);
        $("#unicornDetails").append(`<p>Loves:</p>`);
        let unicornLoves = unicorn.loves;
        unicornLoves.forEach(love => 
            $("#unicornDetails").append(`<li>${love}</li>`)
            )
    });
}

$(document).ready(setup);
