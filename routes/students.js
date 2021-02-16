var express = require('express');
var router = express.Router();

/* GET users listing. */

let students = [
  { id: 1, name: 'Arun' },
  { id: 2, name: 'Pavan' },
  { id: 3, name: 'Vishal' },
  { id: 4, name: 'Madasamy' },
];
router.get('/', function (req, res, next) {
  res.json(students);
});

router.post('/assign-mentor/:id', function (req, res, next) {
  console.log(typeof req.body.mentor);
  if (typeof req.body.mentor === 'string') {
    const student = students.find((ele) => ele.id === parseInt(req.params.id));
    student.mentor = req.body.mentor;
    res.json(students);
  } else {
    res.status(500).json({ statusCode: 500, error: 'Input must be a string' });
  }
});

module.exports = router;
