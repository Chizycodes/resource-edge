import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
//import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
