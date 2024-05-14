import React, { useState } from "react";
import styles from "./Step3.module.css";

const FeedbackFormStep3 = ({ formData, setFormData, submitForm, prevStep, submitted }) => {
  const [recommendation, setRecommendation] = useState("");

  const handleRecommendationChange = (event) => {
    const value = event.target.value;
    setRecommendation(value);
    setFormData({ ...formData, recommendation: value });
  };

  // Handle change for feature requests textarea
  const handleFeatureRequestsChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      featureRequests: value,
    }));
  };

  // Handle change for bug report textarea
  const handleBugReportChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      bugReport: value,
    }));
  };

  const handleSubmit = () => {
    submitForm(formData);
    // No need to set submitted state here; it's managed in the parent component
  };

  return (
    <div id={styles.step3}>
      <div className={styles.container}>
        {!submitted ? (
          <>
            <h2> Additional Feedback</h2>
            <label>
              <h5>Feature Requests:</h5>
              <textarea
                className={styles.feature}
                onChange={handleFeatureRequestsChange} // Use the new change handler
              />
            </label>
            <br />
            <label>
              <h5> Bug Report:</h5>
              <textarea
                className={styles.bug}
                onChange={handleBugReportChange} // Use the new change handler
              />
            </label>
            <br />
            <h5>Will you recommend this product to others?</h5>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={recommendation === "Yes"}
                onChange={handleRecommendationChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={recommendation === "No"}
                onChange={handleRecommendationChange}
              />
              No
            </label>
            <br />
            <button className={styles.prv} onClick={prevStep}>
              Previous
            </button>
            <button className={styles.btn} onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
          <h2 className={styles.afterSubmit}>Thank you for your wonderful feedback!</h2>
        )}
      </div>
    </div>
  );
};

export default FeedbackFormStep3;
