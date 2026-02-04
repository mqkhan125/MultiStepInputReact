const DisplayData = ({ formData , onClose}) => {

  return (
    <div className="display-container">
      <div className="display-card">
        <button className="close" onClick={onClose}>❌</button>
        <h2 className="display-title">Submitted Details</h2>

        <div className="display-row">
          <span className="label">Name</span>
          <span className="value">{formData.name}</span>
        </div>

        <div className="display-row">
          <span className="label">Email</span>
          <span className="value">{formData.email}</span>
        </div>

        <div className="display-row">
          <span className="label">Password</span>
          <span className="value">{formData.password}</span>
        </div>

        <div className="display-row">
          <span className="label">Date of Birth</span>
          <span className="value">{formData.dob}</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
