function calculateBMI() {
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;

    // BMI = weight / height^2
    // weight -> kg, height ->m
    // under weight: bmi < 18.5
    // normal: bmi >= 18.5 and bmi <= 24.9
    // overweight: bmi > 24.9

    let bmi = weight / (height ** 2);

    let bmiOutputElement = document.getElementById("bmi-result");
    bmi = bmi.toFixed(2);
    bmiOutputElement.value = bmi;

    let feedback;
    if(bmi < 18.5){
        feedback = "Under weight";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        feedback = "Normal weight";
    } else {
        feedback = "Overweight";
    }

    let weightConditionEl = document.getElementById("weight-condition");
    weightConditionEl.innerText = feedback;
}

let btnEl = document.getElementById("btn");
btnEl.addEventListener("click", calculateBMI);