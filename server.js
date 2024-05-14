import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// MongoDB connection
await mongoose.connect("mongodb://localhost:27017/Form_data_Submit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("MongoDB connected");

// Define schema
const formDataSchema = new mongoose.Schema({
  Name: String,
  ContactNumber: String,
  email: String,
  rating: String,
  suggestion: String,
  featureRequests: String,
  bugReport: String,
  satisfaction: String,
  recommendation: String,
});

// Define model
const FormData = mongoose.model("FormData", formDataSchema);

// Routes
app.post("/api/saveFormData", async (req, res) => {
  try {
    const formData = req.body;
    const newFormData = new FormData(formData);
    await newFormData.save();
    console.log("Form data saved successfully:", newFormData);
    res.status(200).send({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send({ error: "Error saving form data" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
