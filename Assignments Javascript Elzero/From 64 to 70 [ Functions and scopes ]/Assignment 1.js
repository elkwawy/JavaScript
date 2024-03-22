// Assignment 1
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
      let [fristName, lastName] = zName.split(" ");
      let abbreviatedName = `${fristName} ${lastName[0] + "."}`;
      return abbreviatedName;
      // Osama Mohamed => Osama M.
  }
  function ageWithMessage(zAge) {
      let abbreviatedMessage = zAge.replace(/\D/g, '');
      let ageMessage = `Your Age Is ${abbreviatedMessage}`;
      return ageMessage;
      // 38 Is My Age => Your Age Is 38
  }
  function countryTwoLetters(zCountry) {
      let abbreviatedCountry = zCountry.slice(0, 2).toUpperCase();
      let countryMessage = `You Live In ${abbreviatedCountry}`;
      return countryMessage
      // Egypt => You Live In EG
  }
  function fullDetails() {
      let printName = namePattern(zName);
      let printAge = ageWithMessage(zAge);
      let printCountry = countryTwoLetters(zCountry);

      return `Hello ${printName}, ${printAge}, ${printCountry}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY