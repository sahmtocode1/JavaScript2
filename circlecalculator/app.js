import { calculateCircumference, calculateArea } from "./circleCalculator.js";
import { convertToNumber } from "./validation.js";
import { outputToElement } from './display.js';

document.querySelector('#submitButton').addEventListener("click", function() {
    submitFunction('circumference');
}, false);
document.querySelector('#submitAreaButton').addEventListener("click", function() {
    submitFunction('area');
}, false);
            
function submitFunction(calculationToMake) {
    let outputId = "output", inputId = "radius";
    if (calculationToMake === "area") {
        outputId += "Area";
        inputId += "Area";
    } else if (calculationToMake === "volume") {
        outputId += "Volume";
        inputId += "Volume";
    }
    let userRadius = convertToNumber(document.getElementById(inputId).value);
    if(!userRadius) {
        outputToElement(outputId, "Please enter a valid number.", "red");
    } else {
        if (calculationToMake === "area") {
            outputToElement(outputId, `The area is ${calculateArea(userRadius)}!`);
        }else if (calculationToMake === "volume") {
            outputToElement(outputId, `The area is ${calculateSphereVolume(userRadius)}!`);
        } else {
            outputToElement(outputId, `The circumference is ${calculateCircumference(userRadius)}!`);
        }
    }
}



//add calculateDiameter to import
//add Diameter submit function
//*function submitAreaFunction(){
    //let userRadius = convertToNumber(document.getElementById("radiusForArea").value);
   // let outputElement = document.getElementById("output");
   // if(userRadius){
    //    let area = calculateArea(userRadius);
   //outputElement.innerHTML = `The area is ${area}!`; 
   // }else{
      //  outputElement.innerHTML = "Please enter a valid number.";
   // }
    
//}