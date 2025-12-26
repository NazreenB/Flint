const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://flintproject:3RBlpZ1sBgz8DyPd@flintproject.rtvj69r.mongodb.net/flint_db")
};

module.exports = connectDB;

