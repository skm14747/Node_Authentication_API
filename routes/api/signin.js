const express = require("express");
const User = require("../../models/user");

const signinRouter = express.Router();

signinRouter.post("/signin",async (req,res)=>{

    model.findOne({
        where: {
            key: key,
        },
        order: [ [ 'createdAt', 'DESC' ]],
    });

    try {
        const user = await User.findOne();
        res.status(201).send(user);
      } catch (e) {
        res.status(400).send(e);
      }
})

module.exports = signinRouter;