/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullname = "victor provost";
const currentyear = new Date().getFullYear(); //"2024"
const profilepic = "images/victor.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year"); 
const imageElement = document.querySelector("img");
const foodElement = document.querySelector("#food"); 

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentyear;
imageElement.setAttribute("src", profilepic);
imageElement.setAttribute("alt", `This is brother ${fullname}. He is a student of BYU-Idaho.`);

/* Step 5 - Array */
let favfoods = ["chicken", "fish", "pork", "beef", "lamb", "vegetables", "bread"];

foodElement.innerHTML = favfoods.join(", ");
let newfood = "chocolates";
favfoods.push(newfood); 
foodElement.innerHTML += `<br>${favfoods.join(", ")}`; 



