
import CourseTable from '../CourseTable/courseTable'

import React, { useState } from 'react';


function Createcourse() {
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    description: '',
  });

  const [courseRecords, setCourseRecords] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new course record with the current form data
    const newCourseRecord = { ...formData };

    // Update the course records state
    setCourseRecords([...courseRecords, newCourseRecord]);

    // Optionally, you can reset the form after submission
    setFormData({
      courseName: '',
      courseCode: '',
      description: '',
    });
  };

  return (
    <div className="create-course-container"> {/* Apply the container className */}
         <h2>Create Course</h2>
       <form ClassName='reate-course-form' onSubmit={handleSubmit}>
           <label ClassName='create-course-label' htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            className="create-course-input"
             name="courseName"
             value={formData.courseName}
            onChange={handleInputChange}
            required
          />
    
           <label ClassName='create-course-label' htmlFor="courseCode">Course Code:</label>
         <input
             type="text"
            className="create-course-input"
            id="courseCode"
           name="courseCode"
           value={formData.courseCode}
            onChange={handleInputChange}
           required
           />
    
           <label  ClassName='create-course-label' htmlFor="description">Description:</label>
           <textarea
            id="description"
             className="create-course-textarea"
             name="description"
         value={formData.description}
         onChange={handleInputChange}
            required
         />
  
           <button   className="create-course-button" type="submit">Submit</button>
          <CourseTable courseData={courseRecords} />
       </form>
    </div>
  );
}

export default Createcourse;
