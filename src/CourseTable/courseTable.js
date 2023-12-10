// import React, { useState } from 'react';
 // Correct if the file is named CourseTable.js

function CourseTable({ courseData, onDelete, onEdit }) {
  return (
    <div className="course-table-container">
      <h2>Course Table</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courseData && courseData.length > 0 ? (
            courseData.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
                <td>{course.courseCode}</td>
                <td>{course.description}</td>
                <td>
                  <button onClick={() => onEdit(index)}>Edit</button>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No course data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CourseTable;
