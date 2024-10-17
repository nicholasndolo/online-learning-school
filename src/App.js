import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import CreateCourse from "./components/Courses/CreateCourse";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-course" element={<CreateCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
