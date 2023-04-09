import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
