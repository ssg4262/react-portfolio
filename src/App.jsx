import './App.css';
import MainHome from "./page/Main/MainHome.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // BrowserRouter로 변경

const App = () => {
    return (
        <Router>
            {/* 라우트 설정 */}
            <Routes>
                <Route path="/react-portfolio/" element={<MainHome />} />  {/* component 대신 element 사용 */}
            </Routes>
        </Router>
    );
}

export default App;
