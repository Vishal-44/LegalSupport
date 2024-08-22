const mongoose = require("mongoose")

exports.connectDatabase = () => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Database connected Successfully...");
      })
      .catch((err) => {
        errorLogger.error(`Connection error occured due to:`, err);
        console.log("connection failed due to:" + err);
      });
  };