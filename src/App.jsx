import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Book from "./pages/Book.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App