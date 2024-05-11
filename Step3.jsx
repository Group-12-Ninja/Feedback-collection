import React, { useState } from "react";
import styles from "./Step3.module.css";

const FeedbackFormStep3 = ({ formData, setFormData, submitForm, prevStep }) => {
  const [recommendation, setRecommendation] = useState("");

  const handleRecommendationChange = (event) => {
    const value = event.target.value;
    setRecommendation(value);
    setFormData({ ...formData, recommendation: value });
  };

  const handleSubmit = () => {
    submitForm(formData);
  };

  return (
    <div id={styles.step3}>
      <div className={styles.container}>
        <h2> Additional Feedback</h2>
        <label>
          <h5>Feature Requests:</h5>
          <textarea
            className={styles.feature}
            value={formData.featureRequests}
            onChange={(e) =>
              setFormData({ ...formData, featureRequests: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          <h5> Bug Report:</h5>
          <textarea
            className={styles.bug}
            value={formData.bugReport}
            onChange={(e) =>
              setFormData({ ...formData, bugReport: e.target.value })
            }
          />
        </label>
        <br />
        <h5>Will you recommand this product to others?</h5>
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
      </div>
    </div>
  );
};

export default FeedbackFormStep3;
