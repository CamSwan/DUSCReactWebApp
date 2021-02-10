const router = require('express').Router();
let Task = require('../models/task.model');

//Get
router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Post
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const points = Number(req.body.points);
  const date = Date.parse(req.body.date);

  const newTask = new Task({
    username,
    description,
    points,
    date,
  });

  //Save
  newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      task.username = req.body.username;
      task.description = req.body.description;
      task.points = Number(req.body.points);
      task.date = Date.parse(req.body.date);

      task.save()
        .then(() => res.json('Task updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;