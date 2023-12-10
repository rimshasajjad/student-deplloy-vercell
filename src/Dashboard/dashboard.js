import React from 'react';

// import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';


function  Createdashboard(){
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <ul className="dashboard-list">
        <li className="dashboard-list-item">
          <NavLink className="dashboard-link" to="/home" activeClassName="active-link">Home</NavLink>
        </li>
        <li className="dashboard-list-item">
          <NavLink className="dashboard-link" to="/StudentTable" activeClassName="active-link">Student Table</NavLink>
        </li>
        <li className="dashboard-list-item">
          <NavLink className="dashboard-link" to="/AttendenceTable" activeClassName="active-link">Attendance Table</NavLink>
        </li>
        <li className="dashboard-list-item">
          <NavLink className="dashboard-link" to="/courseTable" activeClassName="active-link">CourseTable</NavLink>
        </li>
        <li className="dashboard-list-item">
          <NavLink className="dashboard-link" to="/Dashboard" activeClassName="active-link">Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Createdashboard;

