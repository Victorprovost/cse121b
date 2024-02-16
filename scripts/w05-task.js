/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('templesElement');
let templeList = [];


/* async displayTemples Function */
const displayTemples = async (temples) => {
    const response = await fetch('https://byui-cse.github.io/cse121b/data/complex/temples.json');
    array.forEach(element => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);


    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b/data/complex/temples.json');
    const data = await response.json();
    displayTemples(templeList);
}

/* reset Function */
function reset() {
    const templesElement = document.getElementById('templesElement');
    templesElement.innerHTML = '';

}
reset();


/* filterTemples Function */

function filterTemples(temples) {
    reset();
    let filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            displayTemples(utahTemples);
            break;
        case "nonutah":
            let nonUtahTemples = temples.filter(temple => !temple.location.toLowerCase().includes("utah"));
            displayTemples(nonUtahTemples);
            break;
        case "older":
            let olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.error("Invalid filter option");
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) }); //filterTemples

