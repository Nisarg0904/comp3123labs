const gretter = (myArray, counter) => {
  let greetText = "Hello";
  for (const element of myArray) {
    console.log(greetText + " " + element);
  }
};
//gretter(["Nisarg Bhatti", "Fernando", "Helly", "Kashyap"]);
const capitalize = (string) => {
  let arr = string.split("");
  // console.log(arr)
  arr = [arr[0].toUpperCase(), ...arr.slice(1)];
  return arr.join("");
};
//console.log(capitalize("hello"));

const capitalizedClor = (arr) => arr.map((word) => capitalize(word));
//console.log(capitalizedClor(["red", "green", "blue"]));

const filterLessThan20 = (arr) => arr.filter((val) => val < 20);
//console.log(filterLessThan20([1, 60, 30, 15, 7]));

const calculateSum = (arr) => arr.reduce((val, total = 0) => total + val);
//console.log(calculateSum([1, 60, 30, 15, 7]));
const calculateProduct = (arr) => arr.reduce((val, total = 1) => total * val);
//console.log(calculateProduct([60, 30]));

class Car {
  constructor(model, year) {
    this.year = year;
    this.model = model;
  }
  details() {
    return "Model: " + this.model + " Engine " + this.year;
  }
}
class Sedan extends Car {
  constructor(model, year, bal) {
    super(model, year);
    this.bal = bal;
  }
  info() {
    return super.details() + " has a balance of: $" + this.bal;
  }
}

const car1 = new Car("Volvo SD", 2018);
console.log(car1.details());
const car2 = new Sedan("Volvo SD", 2018, 30000);
console.log(car2.info());
