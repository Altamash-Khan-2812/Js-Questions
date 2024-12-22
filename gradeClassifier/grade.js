// 5. Grade Classifier:
//  Create a program that takes a student's score as input and prints the corresponding grade (A, B, C, etc.).

// USING IF ELSE STATEMENT
// function checkGrade(num) {
//   if (num >= 90) {
//     return `${num} is A grade`;
//   } else if (num >= 80) {
//     return `${num} is B grade`;
//   } else if (num >= 70) {
//     return `${num} is C grade`;
//   } else {
//     return `${num} is not an A,B,C grade!!`;
//   }
// }

// USING TERNARY EXPRESSION
// function checkGrade(num) {
//   return num >= 90
//     ? "A grade"
//     : num >= 80
//     ? "B grade"
//     : num >= 70
//     ? "C grade"
//     : `${num} is not from A,B,C grade`;
// }

// USING SHORT-CIRCUIT EVALUATION
// function checkGrade(num) {
//   return (
//     (num >= 90 && "A grade") ||
//     (num >= 80 && "B grade") ||
//     (num >= 70 && "C grade")
//   );
// }

// USING SWITCH STATEMENT
function checkGrade(num) {
  switch (num !== "") {
    case num >= 90:
      return "A grade";
    case num >= 80:
      return "B grade";
    case num >= 70:
      return "C grade";
    default:
      return "grade is not from A,B,C";
  }
}
