const db = require ('../database/index.js');

const getItem = (req, res) => {
  db.findPics({_id: req.params.id})
  .then(pics => {
    res.json(pics)
  })
  .catch(error => {
    res.status(400).send(`error processing request: ${error}`)
  })
};

module.exports = {getItem}