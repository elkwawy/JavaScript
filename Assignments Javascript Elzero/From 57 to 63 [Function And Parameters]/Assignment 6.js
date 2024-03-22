// Assignment 6
function multiply(...mul) {
    let value, count = 0;
    for (let i = 0; i <= mul.length; i++) {
      if (typeof mul[i] === "number") {
        count++;
        if (count === 1)
          value = Number.parseInt(mul[i]);
        else
          value *= Number.parseInt(mul[i]);
      }
    }
    console.log(value);
  }
  
  multiply(10, 20); // 200
  multiply("A", 10, 30); // 300
  multiply(100.5, 10, "B"); // 1000
  multiply(100.5, 10, "B", 4, "sd", 2.9); // 9000