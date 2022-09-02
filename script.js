// const { formSubmission } = require("./scriptHelper");


// import { formSubmission } from "./scriptHelper";

// Write your JavaScript code here!
window.addEventListener("load", function () {

    let form = document.querySelector("form")
    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass").value;

    document.getElementById("faultyItems").style.visibility = "hidden"
    form.addEventListener("submit", function (event) {


        if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
            alert("All fields are required!");
            event.preventDefault();
        }
            formSubmission(document, event, pilotName, copilotName, fuelLevel, cargoMass);
            event.preventDefault();


    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        

       let chosenPlanet = pickPlanet(listedPlanets);

        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)

   })

});