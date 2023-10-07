const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://AshikMohan:Ashik12345@cluster0.ngaoxfw.mongodb.net/")
  .then(() => {
    console.log('Mongo DB is connected');
  })
  .catch((err) => {
    console.log('Error in connecting MongoDB: ' + err);
  });