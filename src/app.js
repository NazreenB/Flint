const express = require('express');
const connectDB =   require('./config/database')
const app = express();
const User = require('./models/user');

app.post('/signup', async (req,res)=>{

  // creating a new instance of User model
  const user = new User({
    firstName: "John",
    lastName: "Doe",
    emailId: "john.doe@example.com",
    password: "password123",
  });

  try {
    await user.save();
    res.send("User created successfully...")
  } catch (error) {
    res.status(500).send("Error creating user:", error);
  }
})

connectDB()
.then(()=>{
    console.log("Database connected successfully");
    app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
})
.catch((err)=>{
    console.error("Database connection failed:", err);
});

