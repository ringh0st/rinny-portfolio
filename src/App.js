// import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Hamburger from "./components/Hamburger/Hamburger";
import AboutMe from './pages/AboutMe/AboutMe';
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects/Project"; // Adjust the import as needed

function App() {
  return (
      <div className="App">
        <Router>
          <Hamburger />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} /> {/* Add Projects Route */}
          </Routes>
        </Router>
        <Footer />
      </div>
  );
}

export default App;
