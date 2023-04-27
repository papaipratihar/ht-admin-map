const mongoose = require("mongoose");
// mongoose.connect("mongodb://135.181.45.0:27017/googlemap",{
mongoose
  .connect("mongodb://127.0.0.1:27017/googlemap", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("no connection done");
  });
