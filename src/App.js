import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Component/Header";
import Students from "./Component/Students";
import NotFound from "./Component/NotFound";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/students/*" element={<Students />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
