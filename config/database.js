const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

//Routes go here
app.all('*', (req,res) => {
  res.json({"every thing":"is awesome"})
})

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
})

module.exports = connectDB;
