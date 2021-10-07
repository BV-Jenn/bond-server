const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://kiet:60G8xktgs2xtqVKb@cluster0.rc11m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      (err) => {
        if (err) throw err;
        console.log("MongoDB Connected");
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log("mongo err");
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
