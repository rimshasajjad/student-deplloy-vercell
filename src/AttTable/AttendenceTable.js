import React from 'react';

function AttendanceTable({ attendanceRecords, onEdit, onDelete }) {
  return (
    <div className="attendance-table-container">
      <h2>Attendance Table</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Course ID</th>
            <th>Date</th>
            <th>Attendance Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords && attendanceRecords.length > 0 ? (
            attendanceRecords.map((attendance, index) => (
              <tr key={index}>
                <td>{attendance.studentId}</td>
                <td>{attendance.courseId}</td>
                <td>{attendance.date}</td>
                <td>{attendance.attendanceStatus}</td>
                <td>
                  <button onClick={() => onEdit(index)}>Edit</button>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No attendance records available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;
