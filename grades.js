


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var grades = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0
};

function totalGrades(){
  for (var i = 0; i < scores.length; i++) {
      if (scores[i] <= 100 && scores[i] >= 91 === true) {
        grades.A += 1;
      } else if (scores[i] <= 90 && scores[i] >= 81 === true) {
        grades.B += 1;
      } else if (scores[i] <= 80 && scores[i] >= 71 === true){
        grades.C += 1;
      } else if (scores[i] <= 70 && scores[i] >= 61 === true) {
        grades.D += 1;
      } else if (scores[i] <= 60 && scores[i] >= 50 === true) {
        grades.F += 1;
      } else {
        console.log("Houstin we have a problem");
      }
  }
}


totalGrades();
console.log(grades);
console.log(totalGrades);




// scores = scores.sort(function(previous ,next) {
// return previous - next;
// });



// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?



















// var A = 91 >= minG[i] && this =< maxG[i]




// var grades = [A,B,C,D,F];
// var minG = [91,81,71,61,50];
// var maxG = [100,90,80,70,60];


// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// function returnGrade() {
//   for (var i = 0; i < scores.length; i++) {
//      if (this >= minG[i] && this =< maxG[i]) {
//      console.log(grades[i]);
//    }
//    } else {

//    }
//  }


// console.log(scores.returnGrade);


// console.log(windowSize.between(500, 603, true));
