const express = require('express');
const app = express();
const port = 8000;
const router = express.Router();

// Delete Route
import Delete from './Routes/Delete/Delete';

var project = [
  {
    name: 'All Notes',
  },
];

router.delete('/delete/user', Delete.DeleteRoute);

app.get('/', (req, res) => {
  res.json(project);
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}!`);
});
