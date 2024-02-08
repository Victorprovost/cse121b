/* LESSON 3 - Programming Tasks */

/* Profile Object  */
/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Victor Provost",
    photo: "images/victor.png",
    favoriteFoods: [
        "Beans", "Plantain", "Potatoes", "Soya Beans", "Bean Cake", "Bannana", "Yoghurt", "Chocolate", "Egusi"
    ],
    hobbies: [
        "Cooking", "Walking", "Coding", "Playing video games", "Travelling", "Reading"
    ],
    placesLived: [
        {
            place: "Lagos, Nigeria",
            length: "23 years"
        },
        {
            place: "Accra, Ghana",
            length: "2 weeks"
        },
        {
            place: "Cape Town, South Africa",
            length: "2 years"
        },
        {
            place: "Nairobi, Kenya",
            length: "2 years"
        }
    ]
};

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement('li');
    listItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(listItem);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(listItem);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dtElement);
    document.querySelector('#places-lived').appendChild(ddElement);

})