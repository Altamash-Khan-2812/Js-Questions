//   Implement a program that categorizes a person's age into "Child," "Teenager," "Adult," or "Senior."

// function isAdult(num) {
//   if (num < 0) {
//     return "invalid Age";
//   } else if (num <= 14) {
//     return "Child";
//   } else if (num <= 25) {
//     return "Youth";
//   } else if (num <= 64) {
//     return "Adult";
//   } else {
//     return "Senior";
//   }
// }

function checkAge(age) {
  return (
    (age < 0 && "Invalid age") ||
    (age <= 14 && "Child") ||
    (age <= 25 && "Youth") ||
    (age <= 64 && "Adult") ||
    (age > 64 && "Senior")
  );
}

// function checkAge(age) {
//   switch (true) {
//     case age <= 14 && age >= 0:
//       return "Child";
//     case age <= 25 && age >= 15:
//       return "Youth";
//     case age <= 64 && age >= 25:
//       return "Adult";
//     case age > 64:
//       return "Senior";
//     default:
//       return "Invalid Age";
//   }
// }
