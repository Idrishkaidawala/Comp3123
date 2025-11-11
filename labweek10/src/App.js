import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submitted:', formData);
  setSubmittedData(formData);
};

  return (
    <div className="form-wrapper">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address1" placeholder="1234 Main St" value={formData.address1} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address 2</label>
          <input type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Province</label>
            <select name="province" value={formData.province} onChange={handleChange} required>
              <option value="">Choose...</option>
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Alberta">Alberta</option>
              {/* Add more provinces as needed */}
            </select>
          </div>

          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-check">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
          <label>Agree Terms & Condition?</label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submittedData && (
        <div className="submission-display">
          <h3>Submission Details</h3>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.name}</p>
          <p><strong>Address:</strong> {submittedData.address1}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;