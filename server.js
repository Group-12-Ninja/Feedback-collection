const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const formDataRouter = require("./routes/formData");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/feedback_form", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/saveFormData", formDataRouter);
// app.post("/api/saveFormData", formDataRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
