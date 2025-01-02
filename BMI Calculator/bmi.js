// Create a program that calculates the Body Mass Index (BMI) based on user input and categorizes it as "Underweight," "Normal," "Overweight," or "Obese."
function checkBMI(height, weight) {
  let BMI = weight / (height * height);
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI <= 24.9) {
    return "Normal";
  } else if (BMI <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
