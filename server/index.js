const express = require('express')
const app = express();
const port = 8000;

var dogs = [
    {
        name: 'pluto',
        age: 5
    },
    {
        name: 'scooby',
        age: 1
    }
]

app.get('/', (req, res) => {
  res.json(dogs)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

