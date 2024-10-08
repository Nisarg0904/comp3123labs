var http = require("http");
//TODO - Use Employee Module here
const employeeModule = require("./Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.method !== "GET") {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
  } else {
    if (req.url === "/") {
      //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome to Lab Exercise 03</h1>");
      return;
    }

    if (req.url === "/employee") {
      //TODO - Display all details for employees in JSON format
      const employees = employeeModule.getAllEmployees();
      res.end(JSON.stringify(employees));
      return;
    }

    if (req.url === "/employee/names") {
      //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
      //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
      const employeeNames = employeeModule
        .getAllEmployees()
        .map((emp) => `${emp.firstName} ${emp.lastName}`) // Fixing the map function
        .sort(); // Sorting alphabetically
      res.end(JSON.stringify(employeeNames));
      return;
    }

    if (req.url === "/employee/totalsalary") {
      //TODO - Display Sum of all employees salary in given JSON format
      //e.g. { "total_salary" : 100 }
      const totalSalary = employeeModule
        .getAllEmployees()
        .reduce((sum, emp) => sum + emp.Salary, 0);
      res.end(JSON.stringify({ total_salary: totalSalary }));
      return;
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
