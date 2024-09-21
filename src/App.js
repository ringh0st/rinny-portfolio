// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

function App() {
    return (
        <div className="App">
            <Router>
                <HamburgerMenu /> {/* Add the HamburgerMenu component */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
