// Assignment 4
function checkStatus(a, b, c) {
    let arr = [], n1, n2, n3;
    arr.unshift(a, b, c);
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        n1 = arr[i];
      }
      else if (typeof arr[i] === "number") {
        n2 = arr[i];
      }
      else if (typeof arr[i] === "boolean") {
        n3 = arr[i];
      }
    }
    if (n3 === true) {
      console.log(`Hello ${n1}, Your Age Is ${n2}, You Are Available For Hire`);
    }
    else {
      console.log(`Hello ${n1}, Your Age Is ${n2}, You Are Not Available For Hire`);
    }
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  
  checkStatus("Ahmed", 20, true);
  checkStatus(22, "Baraket", false);
  checkStatus(true, 21, "Ammer");
  checkStatus(false, "Elshahaby", 19);