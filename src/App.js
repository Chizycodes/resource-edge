import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/Footer";
import Dashboard from "./components/pages/Dashboard";
import AuthBg from "./components/AuthBg";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    isLogged: false,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage user={user} setUser={setUser} />}
        />
        <Route path="/login" element={<AuthBg user={user} />} />
        <Route path="/reset" element={<AuthBg />} />
        <Route path="/dashboard" element={<Dashboard setUser={setUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
