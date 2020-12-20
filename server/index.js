const express = require('express')
const app = express();
const port = 8000;

var project = [
    {
       "name":"All Notes"
    }
 ]
 

app.get('/', (req, res) => {
    res.json(project)
  });
  
  app.listen(port, () => {
    console.log(`Application listening on port ${port}!`)
  });
