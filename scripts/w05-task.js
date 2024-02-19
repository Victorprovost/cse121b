/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create HTML elements
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');

        // Set properties
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append elements
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};


const getTemples = async () => {
    try {
        // Fetch temple data
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

        // Convert response to JSON and assign to templeList
        templeList = await response.json();

        // Call displayTemples function with the retrieved templeList
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};



const reset = () => {
    // Get all article elements within templesElement
    const articles = templesElement.querySelectorAll('article');

    // Remove each article element
    articles.forEach(article => {
        article.remove();
    });
};


/* filterTemples Function */

const filterTemples = (temples) => {
    // Clear the displayed list of temples
    reset();

    // Get the value of the HTML select element with the ID of filtered
    const filter = document.querySelector('#filtered').value;

    // Use a switch statement to determine the filter option
    switch (filter) {
        case 'utah':
            // Filter for temples located in Utah
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            // Filter for temples located outside Utah
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples built before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            // No filter, display all temples
            displayTemples(temples);
            break;
    }
};



/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) }); //filterTemples

getTemples();