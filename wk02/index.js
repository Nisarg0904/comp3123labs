var f1 = function greet() {
  console.log("Hello World");
};

var f2 = function () {
  console.log("Good Morning");
};

function greetUser(a, greet, morning) {
  if (a == "morning") {
    morning();
  } else {
    greet();
  }
}

greetUser("morning", f1, f2);
