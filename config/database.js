const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database Successfully!!!");
  } catch (err) {
    console.error("Error Connecting to Database!!!");
  }
};

module.exports = connectDB;
