console.log("Hello, world 1");
console.log("Hello, world 2");

var obj1 = {
  name: "John",
  age: 30,
};

var obj2 = {
  fname: "Pritesh",
  myage: 30,
  result: "pass",
  pass: true,
  courses: ["Math", 100, "English"],
  car: null,
};
/*
var x = 100.5;
console.log(typeof x);
console.log(typeof obj1);
console.log(typeof obj2.fname);
console.log(typeof obj2.courses);
console.log(typeof obj2.car);

function greet() {
  console.log("Hello, Pritesh");
}
  */
function capitalizeFirstLetter(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function max(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

function right(string) {
  if (string.length > 3) {
    return (
      string.substring(string.length - 3, string.length) +
      string.substring(0, string.length - 3)
    );
  } else {
    return string;
  }
}
function angle_Type(alpha) {
  return alpha > 0 && alpha < 90
    ? "Acute angle"
    : alpha == 90
    ? "Right angle"
    : alpha > 90 && alpha < 180
    ? "Obtuse angle"
    : "Straight angle";
}
function array_max_sum(array, digit) {
  result = 0;
  for (let i = 0; i <= array.length - digit; i++) {
    sum = 0;
    for (let j = 0; j < digit; j++) {
      sum += array[i + j];
    }
    if (sum > result) result = sum;
  }
  return result;
}
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));

//console.log(typeof greet);
