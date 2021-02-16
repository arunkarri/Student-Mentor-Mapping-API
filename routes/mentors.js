var express = require('express');
var router = express.Router();

/* GET users listing. */

let mentors = [
  { id: 1, name: 'Pugazh' },
  { id: 2, name: 'Venkat' },
  { id: 3, name: 'Varghese' },
  { id: 4, name: 'Ashik' },
];
router.get('/', function (req, res, next) {
  res.json(mentors);
});

router.post('/assign-students/:id', function (req, res, next) {
  if (Array.isArray(req.body.students)) {
    const mentor = mentors.find((ele) => ele.id === parseInt(req.params.id));
    mentor.students = req.body.students;
    res.json(mentors);
  } else {
    res.status(500).json({ error: 'Students should be an array of objects', statusCode: 500 });
  }
});

module.exports = router;
