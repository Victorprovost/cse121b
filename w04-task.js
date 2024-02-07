/* LESSON 3 - Programming Tasks */

/* Profile Object  */
/* Populate Profile Object with placesLive objects */
const myprofile = {
    name: "Victor Provost",
    photo: {
        src: "images/victor.png",
        alt: "my profile picture"
    },
    favoritefoods: [
        "Rice",
        "Apples",
        "Chicken",
        "Egusi soup",
        "Ice cream"
    ],
    hobbies: [
        "Playing music",
        "Eating",
        "Drawing",
        "Watching movies",
        "Traveling"
    ],

    placesLived: [
        {
            place: "Bayelsa State",
            length: "5 years"
        },
        {
            place: "Lagos State",
            length: "10 years"
        },
        {
            place: "FCT Abuja",
            length: "3 years"
        }
    ]
};

// Adding an additional place where you lived
myprofile.placesLived.push(
    {
        place: "Delta State",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */
document.querySelector("#name").innerHTML = `My name is <em>${myprofile.name}</em>`;
/* Name */

/* Photo with attributes */
const photoElement = document.getElementById('photo');
photoElement.src = myprofile.photo.src;
photoElement.alt = myprofile.photo.alt;

/* Favorite Foods List*/
myprofile.favoritefoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
const hobbiesList = document.getElementById('hobbies');
myprofile.hobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
const placesList = document.getElementById('places-lived');
myprofile.placesLived.forEach(place => {
    // Create a new <dl> element for each place
    const dlElement = document.createElement('dl');

    // Create <dt> element for place name
    const dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    // Create <dd> element for place length
    const ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    // Append <dt> and <dd> to the <dl> element
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);

    // Append the <dl> element to the placesList
    placesList.appendChild(dlElement);
});
