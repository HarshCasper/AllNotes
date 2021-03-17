const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
const User = mongoose.model('User');

router.post('/signup', async (req, res) => {
  console.log(req.body)
  const { name, email, course, specialisation, year, about, dob, gender, password } = req.body;
  try {
    const user = new User({ name, email, course, specialisation, year, about, dob, gender, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.jwtkey)
    res.send({ token })
  }
  catch (err) {
    return res.status(422).send(err.message)
  }
})

router.post('/signin', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "You must provide email or password" })
  }
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(422).send({ error: "You must provide email or password" })
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.jwtkey)
    res.send({ token })
  } catch (err) {
    return res.status(422).send({ error: "You must provide email or password" })
  }
})

module.exports = router
