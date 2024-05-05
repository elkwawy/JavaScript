// Assignment 3
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  // let myMap = new Map([
  //   ["username", "Osama"],
  //   ["role","Admin"],
  //   ["country", "Egypt",]
  // ]);
  
  let myMap =new Map(Object.entries(myInfo)); // اختصار
  
  console.log(myMap); // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
  console.log(myMap.size); // 3
  console.log(myMap.has("role")); // true
  
  // Needed Output
  // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
  // 3
  // true