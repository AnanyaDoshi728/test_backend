require('../db/connection')
const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    next();
  });

router.get('/',getAllTasks)
router.post('/',createTask)
router.get('/:id',getSingleTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router