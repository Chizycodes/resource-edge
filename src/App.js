import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <Router>
      <LandingPage/>
    </Router>
  );
}

export default App;
