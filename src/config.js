const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url =
  process.env.MONGODB_URI ||
  "mongodb+srv://bengquist:yourmom1023@reservations-cjvgc.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
