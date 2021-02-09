const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const app = express()
const port = 8000;
// const { mongoUrl } = process.env.mongoUrl

require('./models/User');

const requireToken = require('./middleware/requireToken')
app.use(bodyParser.json())
const authRoutes = require('./routes/authRoutes')
app.use(authRoutes)


mongoose.connect(process.env.mongoUrl, {
  // dbName: "UserCollection",
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
  console.log("Connected to mongo")
})
mongoose.connection.on('error', (err) => {
  console.log("Not Connected to mongo", err)
})



// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.send('hello')
// })

app.get('/', requireToken, (req, res) => {
  res.send("Your email is " + req.user.email)
})

app.listen(port, () => {
  console.log(`Application listening on port ${port}!`)
});
