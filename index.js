//reverseString(str);
function reverseString(str = "hello") {
  let strArray = Array.from(str);
  let reverse = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    reverse.push(strArray[i]);
  }
  return reverse.join("");
}
console.log(reverseString("checking"));

//function sumArray(arr)
function sumArray(arr) {
  let sum = arr.reduce((total, val) => {
    return total + val;
  }, 0);
  return sum;
}

console.log(sumArray([1, 2, 3, 4]));

//function removeDuplicates(arr)
let withDuplicate = [5, 5, 5, 6, 7, 9, 7, 10];
function removeDuplicates(arr) {
  let countObj = {};
  arr.forEach((element, index, array) => {
    let count = 0;
    for (let value of array) {
      if (value === element) {
        count++;
      }
    }
    countObj[element] = count;
  });
  let newArray = Object.keys(countObj);
  return newArray;
}

let withOutDuplicate = removeDuplicates(withDuplicate);
console.log(withOutDuplicate);

//function celsiusToFahrenheit(celsius)
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(25));
