import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMail, IoMdCall } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
// import axios from 'axios';
import "./Form.css";

function Form() {
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [experienceRating, setExperienceRating] = useState(0);
  const [contactError, setContactError] = useState("");
  // const [Feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorMessage = "";

    if (!username.trim()) {
      errorMessage += "Please enter your username\n";
    } else if (!contactNumber.trim()) {
      errorMessage += "Please enter your contact number\n";
    } else if (!email.trim()) {
      errorMessage += "Please enter your email\n";
    } else if (experienceRating === 0) {
      errorMessage += "Please rate your experience\n";
    }

    if (errorMessage) {
      alert(errorMessage);
    } else {
      submitForm();
      alert(" Feedback submit successfully");
      handleClear();
    }
  };

  const submitForm = () => {
    // console.log("Form submitted successfully!");
  };

  const handleClear = () => {
    setUsername("");
    setContactNumber("");
    setEmail("");
    setExperienceRating(0);
    setFeedback("");
  };
  const handleStarClick = (rating) => {
    setExperienceRating(rating);
  };

  const handleContactNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input.length < 10) {
      setContactNumber(input);
      setContactError("Contact number must have at least 10 digits.");
    } else {
      setContactNumber(input.slice(0, 10));
      setContactError("");
    }
  };

  return (
    <>
      <center>
        <h1>Feedback Form</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <FaRegUserCircle />
            </span>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <IoMdCall />
            </span>
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Your contact number"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={contactNumber}
              onChange={handleContactNumberChange}
              maxLength="10"
            />
            {contactError && <div className="error">{contactError}</div>}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <IoIosMail />
            </span>
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
          </div>

          <div>
            <label className="label"> Share your experience in scaling</label>
            <br />
            {[1, 2, 3, 4, 5].map((rating) => (
              <RiStarSFill
                key={rating}
                className={rating <= experienceRating ? "star-active" : ""}
                onClick={() => handleStarClick(rating)}
              />
            ))}
          </div>

          <textarea
            name="text"
            className="form-control"
            id="text"
            rows="5"
            placeholder="Suggest anything we can improve.."
          ></textarea>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
            <button
              className="btn  btn-info btn-lg"
              type="button"
              onClick={handleClear}
            >
              Clear
            </button>
            <button className="btn  btn-info  btn-lg" type="submit ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
