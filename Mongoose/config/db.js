const mongoose = require('mongoose');

const dbName = 'schoolDB' //change based on database name

const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb://localhost:27017/${dbName}`);;
        console.log('Connected to MongoDB');
    }
    catch (error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;