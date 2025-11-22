const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
    try{
        const students = await Student.find();
        res.render('index', {students});
    } catch (error){
        return null;
    }
};

exports.addStudentForm = (req, res) => {
    res.render('addStudent');
};

exports.addStudent = async (req, res) => {
    try{
        const student = req.body;
        await Student.create({
            name: student.name,
            course: student.course,
            email: student.email,
            age: Number(student.age),
        });
        res.redirect('/students');
    } catch (error){
        res.status(400).json({ message: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateStudentForm = async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render('updateStudent', {student});
};

exports.updateStudent = async (req, res) => {
    try {
        const student = req.body;
        await Student.findByIdAndUpdate(req.params.id, {
            name: student.name,
            course: student.course,
            email: student.email,
            age: Number(student.age),
        });
        res.redirect('/students');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAllStudents = async (req, res) => {
    try {
        await Student.deleteMany({});
        res.status(200).json({ message: 'All students deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};