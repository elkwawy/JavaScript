// Assignment 4
function specialMix(...data) {
  let sum = 0;
  let allStrings = true;

  for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === 'number') {
          sum += data[i];
          allStrings = false;
         
          // /^\d+$/.test()  هو نمط يتحقق من أن السلسلة تحتوي على أرقام فقط
          // false ولو ارقام وحروف او رموز هترجع ture لو بتحتوي علي ارقام فقط هترجع 
      } else if (typeof data[i] === 'string' && /^\d+$/.test(data[i].replace(/\D/g, ''))) {
          //.replace(/\D/g, '') يعني استبدال كل شيء غير رقمي في النص بسلسلة فارغة
          // هذا يستخدم لضمان أننا نقوم بجمع الأرقام فقط عندما يكون العنصر نصيًا ويحتوي على أرقام في بدايته
          sum += parseInt(data[i].replace(/\D/g, ''));
          allStrings = false;
      }
  }

  if (allStrings) {
      return "All Is Strings";
  } else {
      return sum;
  }
}

// Test Cases
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20C@%^ool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings