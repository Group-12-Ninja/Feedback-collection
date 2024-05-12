const express = require("express");
const router = express.Router();
const FormDataModel = require("../models/FormData");

router.post("/", async (req, res) => {
  try {
    const formData = req.body;
    const savedFormData = await FormDataModel.create(formData);
    res.status(201).json(savedFormData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
