
import React, { useState } from 'react';
import AttendanceTable from '../AttTable/AttendenceTable';
function  Createattendence(){
  const [attendanceData, setAttendanceData] = useState({
    studentId: '',
    courseId: '',
    date: '',
    attendanceStatus: '',
  });

  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAttendanceData({ ...attendanceData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new attendance record with the current form data
    const newAttendanceRecord = { ...attendanceData };

    // Update the attendance records state
    setAttendanceRecords([...attendanceRecords, newAttendanceRecord]);

    // Optionally, you can reset the form after submission
    setAttendanceData({
      studentId: '',
      courseId: '',
      date: '',
      attendanceStatus: '',
    });
      };
  return (
    <div className="create-attendance-record-container">
    <h2>Attendance Record</h2>
    <form className="create-attendance-record-form" onSubmit={handleSubmit}>
      <label className="create-attendance-record-label" htmlFor="studentId">Student ID:</label>
      <input
        type="text"
        id="studentId"
        name="studentId"
        className="create-attendance-record-input"
        value={attendanceData.studentId}
        onChange={handleInputChange}
        required
      />

      <label className="create-attendance-record-label" htmlFor="courseId">Course ID:</label>
      <input
        type="text"
        id="courseId"
        name="courseId"
        className="create-attendance-record-input"
        value={attendanceData.courseId}
        onChange={handleInputChange}
        required
      />

      <label className="create-attendance-record-label" htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        className="create-attendance-record-input"
        value={attendanceData.date}
        onChange={handleInputChange}
        required
      />

      <label className="create-attendance-record-label" htmlFor="attendanceStatus">Attendance Status:</label>
      <select
        id="attendanceStatus"
        name="attendanceStatus"
        className="create-attendance-record-select"
        value={attendanceData.attendanceStatus}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Attendance Status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit" className="create-attendance-record-button">Submit</button>
    </form>
    <AttendanceTable attendanceRecords={attendanceRecords} />
  </div>
  );
}

export default Createattendence ;