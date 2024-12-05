// src/components/RegistrationPage.js
import React, { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';

function RegistrationPage() {
  const [personalInfo, setPersonalInfo] = useState({ name: '', age: '' });
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
  const [accountInfo, setAccountInfo] = useState({ username: '', password: '' });
  const [additionalDetails, setAdditionalDetails] = useState({ hobby: '', bio: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { personalInfo, contactInfo, accountInfo, additionalDetails });
  };

  return (
    <div>
      <h2>Register</h2>
      <Tabs defaultActiveKey="personal" id="registration-tabs">
        {/* Personal Information Tab */}
        <Tab eventKey="personal" title="Personal Information">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={personalInfo.name}
                onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                value={personalInfo.age}
                onChange={(e) => setPersonalInfo({ ...personalInfo, age: e.target.value })}
              />
            </div>
          </form>
        </Tab>

        {/* Contact Information Tab */}
        <Tab eventKey="contact" title="Contact Information">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
            />
          </div>
        </Tab>

        {/* Account Information Tab */}
        <Tab eventKey="account" title="Account Information">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={accountInfo.username}
              onChange={(e) => setAccountInfo({ ...accountInfo, username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={accountInfo.password}
              onChange={(e) => setAccountInfo({ ...accountInfo, password: e.target.value })}
            />
          </div>
        </Tab>

        {/* Additional Details Tab */}
        <Tab eventKey="additional" title="Additional Details">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Hobby"
              value={additionalDetails.hobby}
              onChange={(e) => setAdditionalDetails({ ...additionalDetails, hobby: e.target.value })}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Bio"
              value={additionalDetails.bio}
              onChange={(e) => setAdditionalDetails({ ...additionalDetails, bio: e.target.value })}
            />
          </div>
        </Tab>
      </Tabs>

      {/* Submit Button */}
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default RegistrationPage;
