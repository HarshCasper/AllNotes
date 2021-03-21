const express = require('express');
const app = express();

// assuming model to be of name - User
const User = mongoose.model('User');

module.exports.DeleteRoute('/', (req, res) => {
  const { body } = req;
  const { name, email, _id } = body;

  if (!name || !email || !_id)
    return res.send({
      message: ' Error ! Product not found ',
    });

  User.findByIdAndRemove(_id, (err, docs) => {
    if (err) {
      return res.send({
        message: ' Sorry ! The process could not be completed',
      });
    } else
      return res.send({
        message: ' User sucessfully deleted !',
      });
  });
});
