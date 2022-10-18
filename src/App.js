import './App.css';
import { BrowserRouter, Routes, Route, matchPath } from 'react-router-dom';
import Students from "./Component/Students";
import NotFound from "./Component/NotFound";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";
import Classroom from "./Component/Student/Classroom";
import ClassroomHome from "./Component/Student/ClassroomHome";
import ClassroomTask from "./Component/Student/ClassroomTask";
import ClassroomAttendance from "./Component/Student/ClassroomAttendance";
import ClassroomPro from "./Component/Professor/Classroom"
import ClassroomHomePro from "./Component/Professor/ClassroomHome"
import ClassroomAttendancePro from "./Component/Professor/ClassroomAttendance"
import ClassroomTaskPro from "./Component/Professor/ClassroomTask"
import ClassroomExamPro from "./Component/Professor/ClassroomExam"
import React from 'react';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {/* Student URL임 */}
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/student" element={<Students />}></Route>

            <Route path="/student/classroom" element={<Classroom/>}></Route>
              <Route path="/student/classroom/home" element={<ClassroomHome/>}/>
              <Route path="/student/classroom/attendance" element={<ClassroomAttendance/>}/>
              <Route path="/student/classroom/task" element={<ClassroomTask/>}/>

            <Route path="/professor/classroom" element={<ClassroomPro/>}/>
              <Route path="/professor/classroom/home" element={<ClassroomHomePro/>}/>
              <Route path="/professor/classroom/attendance" element={<ClassroomAttendancePro/>}/>
              <Route path="/professor/classroom/task" element={<ClassroomTaskPro/>}/>
              <Route path="/professor/classroom/exam" element={<ClassroomExamPro/>}/>

            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                       
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          

      </BrowserRouter>
    </div>
  );
}

export default App;
