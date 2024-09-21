// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Hamburger from "./components/Hamburger/Hamburger";
import AboutMe from './pages/AboutMe/AboutMe'; // Adjust the import as needed

function App() {
  return (
      <div className="App">
        <Router>
          <Hamburger />
          <Routes>
            <Route path="/rinny-portfolio/" element={<HomePage />} />
            <Route path="/rinny-portfolio/about-me" element={<AboutMe />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
