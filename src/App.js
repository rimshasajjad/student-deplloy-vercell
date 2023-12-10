
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './Navbar/navbar.js';
import CreateStudent from './Student/student.js'
import Createattendence from './Attendence/attendence.js';
import Createdashboard from './Dashboard/dashboard.js';
import Home from './Home/home.js'
import  Createcourse from './Course/course.js'
import'./App.css'
import AttendenceTable from './AttTable/AttendenceTable.js';
import StudentTable from './STable/StudentTable.js';
import CourseTable from './CourseTable/courseTable.js';
// import db from './configure/firebase.js'
function App() {
  return (
    <Router>
    <Navbar/>
 <Routes>
 <Route path='/Home' element={<Home/>}/>
   <Route path='/Student/' element={<CreateStudent/>}/>
   <Route path='/Attendence' element={<Createattendence/>}/>
   <Route path='/Course' element={<Createcourse/>}/>
   <Route path='/Dashboard' element={<Createdashboard/>}/>
   <Route path='/AttendenceTable' element={<AttendenceTable/>}/>
   <Route path='/StudentTable' element={< StudentTable/>}/>
   <Route path='/CourseTable' element={< CourseTable/>}/>


   
   </Routes>
    </Router>
   
  );
}

export default App;
