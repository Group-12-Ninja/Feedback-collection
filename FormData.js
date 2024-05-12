const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  Name: String,
  ContactNumber: String,
  email: String,
  rating: Number,
  suggestion: String,
  featureRequests: String,
  bugReport: String,
  satisfaction: String,
  recommendation: String,
});

const FormDataModel = mongoose.model("FormData", formDataSchema);

module.exports = FormDataModel;
