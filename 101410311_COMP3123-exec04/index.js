const express = require("express");
const app = express();
const SERVER_PORT = 3000;
app.get("/hello", (req, res) => {
  res.send("<h1>Hello Express JS!</h1>");
});
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Nisarg";
  const lastname = req.query.lastname || "Bhatti";

  res.json({
    firstname: firstname,
    lastname: lastname,
  });
});

app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({
    firstname: firstname,
    lastname: lastname,
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
