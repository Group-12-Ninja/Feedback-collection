// FeedbackForm.jsx

import React, { useState } from "react";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const FeedbackForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize your form data here
    Name: "",
    ContactNumber: "",
    email: "",
    rating: "",
    suggestion: "",
    featureRequests: "",
    bugReport: "",
    satisfaction: "",
    recommendation: "",
  });
  const [submitted, setSubmitted] = useState(false); // Track form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/saveFormData", formData);
      console.log("Form data sent successfully:", response.data);
      setSubmitted(true); // Set submitted to true after successful submission
      // Optionally, reset form state after successful submission
      setFormData({
        Name: "",
        ContactNumber: "",
        email: "",
        rating: "",
        suggestion: "",
        featureRequests: "",
        bugReport: "",
        satisfaction: "",
        recommendation: "",
      });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} handleChange={handleChange} nextStep={nextStep} />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData} // Pass formData as props to Step3
          prevStep={prevStep}
          submitted={submitted} // Pass submitted status as prop to Step3
        />
      )}
    </form>
  );
};

export default FeedbackForm;
