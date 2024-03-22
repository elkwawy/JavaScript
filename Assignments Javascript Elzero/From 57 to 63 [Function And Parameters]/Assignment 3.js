// Assignment 3
function ageInTime(theAge) {
    // Your Code Here
  
    if (theAge < 10 || theAge > 100) {
      console.log("Age Out Of Range");
    }
    else {
      console.log(`Months => ${theAge * 12} Months
  Weeks => ${theAge * 12 * 4} Weeks
  Days => ${theAge * 12 * 30} Days
  Hours => ${theAge * 12 * 30 * 24} Hours
  Minutes => ${theAge * 12 * 30 * 24 * 60} Minutes
  Seconds => ${theAge * 12 * 30 * 24 * 60 * 60} Seconds`
      );
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
  ageInTime(20); 
  ageInTime(9); 