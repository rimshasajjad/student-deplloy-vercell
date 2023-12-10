
import React, { useState } from 'react';
import StdTable from '../STable/StudentTable';
function CreateStudent() {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    contactInfo: '',
  });

  const [studentData, setStudentData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudentData = [...studentData, formData];
    setStudentData(newStudentData);
    console.log('Student form submitted:', formData);
    setFormData({
      name: '',
      studentId: '',
      contactInfo: '',
    });
    
  };

  return (
    <div>
      <div className="create-student-container">
     <h2>Create Student</h2>
    <form className="create-student-form" onSubmit={handleSubmit}>
     <label className="create-student-label" htmlFor="name">Name:</label>
       <input
        type="text"
        id="name"
        name="name"
        className="create-student-input"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label className="create-student-label" htmlFor="studentId">Student ID:</label>
      <input
        type="text"
        id="studentId"
        name="studentId"
        className="create-student-input"
        value={formData.studentId}
        onChange={handleInputChange}
        required
      />

      <label className="create-student-label" htmlFor="contactInfo">Contact Information:</label>
      <textarea
        id="contactInfo"
        name="contactInfo"
        className="create-student-textarea"
        value={formData.contactInfo}
        onChange={handleInputChange}
        required
      />

      <button type="submit" className="create-student-button">Submit</button>
    </form>
  </div>
      <StdTable formData={studentData} />
    </div>
  );
}

export default CreateStudent;




