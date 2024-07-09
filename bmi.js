function calculateBMI(weight, height){
    let bmi = weight / (height * height);
    return bmi;
}

function interpretBMI(bmi) {
    if (bmi < 18.5){
        return "underweight";
    }
    else if(bmi < 25){
        return "Normal";
    }
    else if (bmi < 30){
        return "overweight";
    }
    else{
        return "obese"
    }
}

let weight = 80; // in kg
let height = 2.75; // in meters

let bmi = calculateBMI(weight, height);
console.log("BMI:", bmi)
console.log("Interpretation", interpretBMI(bmi));