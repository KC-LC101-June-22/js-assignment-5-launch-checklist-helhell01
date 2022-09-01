// Write your helper functions here!
// require('isomorphic-fetch')


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`

}

        function validateInput(testInput) {
            console.log(testInput)
         if (testInput === "") {
            return "Empty"
        } else if (isNaN(Number(testInput))) {
            return "Not a Number"
        } else if (!isNaN(parseInt(testInput) === 'false')) {
            return "Is a Number"

        }
    //Takes in a string and returns "Empty", "Not a Number", or "Is a Number"
    }

//The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let journeyHeader = document.getElementById("launchStatus");

    console.log(validateInput(pilot))

    if ((validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number") || (validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number")) {
        alert("Make sure to enter valid information for each field.");
    } else {

        if ((validateInput(fuelLevel) === "Is a Number") && (validateInput(cargoLevel) === "Is a Number") && (validateInput(pilot) === "Not a Number") && (validateInput(copilot) === "Not a Number")) {
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`


            if ((fuelLevel >= 10000) && (cargoLevel <= 10000)) {
                journeyHeader.innerHTML = "Shuttle is Ready for Launch"
                journeyHeader.style.color = "green"
            } 

            if (fuelLevel <= 10000) {
                document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`
                journeyHeader.innerHTML = "Shuttle Not Ready for Launch"
                journeyHeader.style.color = "rgb(199, 37, 78)"
            } else {
                document.getElementById("cargoStatus").innerHTML = `Fuel level high enough for launch`
            }

            if (cargoLevel >= 10000) {
                document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`
                journeyHeader.innerHTML = "Shuttle Not Ready for Launch"
                journeyHeader.style.color = "rgb(199, 37, 78)"
            } else {
                document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`
            }


        }
    }


    //    will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.
    //    Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements



}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random() * 6)
    let chosenPlanet = planets[i]
    return chosenPlanet
}



// pickPlanet() takes in one argument: a list of planets.
// Using Math.random(), return one planet from the list with a randomly-selected index.
// myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete.
// You need to add the URL and return response.json().



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
