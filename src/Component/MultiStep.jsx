import React, { useState } from "react";
import DisplayData from "./DisplayData";

const MultiStep = () => {
  const data = [
    {
      id: "name",
      buttonName: "Next",
      placeholder: "Enter your name",
      inputText: "text",
      label: "Name",
    },
    {
      id: "email",
      buttonName: "Next",
      placeholder: "Enter your email",
      inputText: "email",
      label: "Email",
    },
    {
      id: "password",
      buttonName: "Next",
      placeholder: "Enter your password",
      inputText: "password",
      label: "Password",
    },
    {
      id: "dob",
      buttonName: "Submit",
      placeholder: "Enter your DOB",
      inputText: "date",
      label: "DOB",
    },
  ];

  const [step, setStep] = useState(0)
  const [showDisplay, setShowDisplay] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(step === data.length-1){
        setShowDisplay(true)
    }else{
        setStep((prev) => prev + 1);
    }
  };

  const handleBackBtn = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {showDisplay ? (
        <DisplayData
          formData={formData}
          onClose={() => {
            setShowDisplay(false);
            setStep(0);
          }}
        />
      ) : (
        <div className="multistep-container">
          <form className="multistep-form" onSubmit={handleSubmit}>
            <h2>Multi Step Form</h2>

            <label>{data[step].label}</label>
            <input
              type={data[step].inputText}
              placeholder={data[step].placeholder}
              name={data[step].id}
              value={formData[data[step].id]}
              onChange={handleInput}
              required
            />

            <p className="step-count">
              Step {step + 1} of {data.length}
            </p>

            <div className="form-actions">
              {step > 0 && (
                <button
                  type="button"
                  className="back-btn"
                  onClick={handleBackBtn}
                >
                  ← Back
                </button>
              )}

              <button type="submit" className="next-btn">
                {data[step].buttonName}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default MultiStep;
