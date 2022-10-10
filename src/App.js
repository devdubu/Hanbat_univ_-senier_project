import './App.css';
import { BrowserRouter, Routes, Route, matchPath } from 'react-router-dom';
import Students from "./Component/Students";
import NotFound from "./Component/NotFound";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";
import Classroom from "./Component/Student/Classroom";
import ClassroomHome from "./Component/Student/ClassroomHome";
import ClassroomTask from "./Component/Student/ClassroomTask";
import React from 'react';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/students*" element={<Students />}></Route>
            <Route path="/classroom" element={<Classroom/>}></Route>
              <Route path="/classroom/home" element={<ClassroomHome/>}/>
                <Route path="/classroom/home/task" element={<ClassroomTask/>}/>


            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                       
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          

      </BrowserRouter>
    </div>
  );
}

export default App;
