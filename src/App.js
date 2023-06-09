import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import News from "./Components/News";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="News" element={<News />} />
        <Route path="Service" element={<Service />} />
        <Route path="Testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
