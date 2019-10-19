const express = require("express");
const User = require("./models/user");
const signuprouter = require("./routes/api/signup")

const app = express();


User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});

// Init Middleware
app.use(express.json());

// Get Dashboard
app.get("/", (req, res) => {
  res.send("Started");
});



// Define Routes
//user/signup
app.use(signuprouter)
//user/signin

//user/profile

//user/profile/update



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));