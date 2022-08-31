"use strict;"

let people = [];

  function calculateBMI() {
  
    let name = document.querySelector("#name").value;
    let height = parseInt(document
            .querySelector("#height").value);
    
    let weight = parseInt(document
            .querySelector("#weight").value);
    
    let result = document.querySelector("#result");
    
    let bmi = (weight / ((height * height) 
    / 10000)).toFixed(2);

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";

    else {
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `${name} is  underweight : ${bmi}`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
            ` ${name} is within limits: ${bmi}`;
  
        else result.innerHTML =
            `${name} is overweight : ${bmi}`
    }

    //  creating an object with the values from the input
        let person =  {
            name: name,
            height: height, 
            weight: weight,
            bmi: bmi,
            };

    // pushing the newly created object into the empty array 
        people.push(person);
}

console.log(people)


