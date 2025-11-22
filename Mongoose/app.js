const express = require('express')
const connectDB = require('./config/db')
const studentRouter = require(`./routes/studentRoutes`);

const app = express();
const PORT = 3000;

connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/students', studentRouter);

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000/students")
});