const express = require("express");
const User = require("../../models/user");

const signupRouter = express.Router();

signupRouter.post("/signup",async (req,res)=>{

    const user = new User(req.body);

    console.log(user);
    

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }

})


module.exports = signupRouter;