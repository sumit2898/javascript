const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if (height === "" || weight === "") {
        result.textContent = "Please enter valid height and weight"
        return;
    }
    // if (height <= 0 || weight <= 0) {
    //     result.textContent = "Height and weight must be positive numbers"
    //     return;
    // }
    // if (isNaN(height) || isNaN(weight)) {
    //     result.textContent = "Please enter valid numbers for height and weight"
    //     return;
    // }
    // if (height > weight) {
    //     result.textContent = "Height cannot be greater than weight"
    //     return;
    // }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    result.textContent = `Your BMI is ${bmi}`
})