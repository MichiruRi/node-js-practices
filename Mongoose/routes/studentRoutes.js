const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);
router.get('/add', studentController.addStudentForm);
router.post('/add', studentController.addStudent);
router.get('/update/:id', studentController.updateStudentForm);
router.post('/update/:id', studentController.updateStudent);
router.get('/find/:id', studentController.getStudentById);
router.post('/delete/:id', studentController.deleteStudent);
router.get('/deleteAll', studentController.deleteAllStudents);

module.exports = router;