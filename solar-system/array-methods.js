const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

let planetContainer = document.querySelector(".planets");

planets.forEach(planet => {
planetContainer.innerHTML += `
<h1>${planet}</h1>
`
})


const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

capPlanets = planets.map(planet => {
    return planet.charAt(0).toUpperCase() + planet.slice(1);
})
console.log(capPlanets)

capPlanets.forEach(planet => {
    planetContainer.innerHTML += `
    <h1>${planet}</h1>
    `
    })
    

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

ePlanets = capPlanets.filter ( planet => {
    return planet.includes("e")
})

ePlanets.forEach(planet => {
    planetContainer.innerHTML += `
    <p>${planet}<p>
    `
    })