import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <LandingPage />
      <Footer/>
    </Router>
  );
}

export default App;
