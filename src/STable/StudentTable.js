
import React from 'react';

function StdTable({ formData, onDelete, onEdit }) {
  return (
    <div className="std-table-container">
      <h2>Student Table</h2>
      <table className="std-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Student ID</th>
            <th>Contact Information</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formData && formData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.studentId}</td>
              <td>{student.contactInfo}</td>
              <td>
              <button onClick={() => onEdit(index)}>Edit</button>
                  <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {formData && formData.length === 0 && (
        <p>No student data available.</p>
      )}
    </div>
  );
}

export default StdTable;
