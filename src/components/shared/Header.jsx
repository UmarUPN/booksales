import "./styles/Header.css";

import { Link, NavLink } from 'react-router';

export default function Navbar() {
    return (
    <header className="p-3 text-bg-dark sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <i className="fa-sharp fa-solid fa-book-open-reader fa-2xl" style={{ color: "#FFD43B" }}></i>
            <span className="fw-bold fs-4 ms-2">BookSales</span>
          </Link>
          <ul
            className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 me-auto ms-auto"
          >
            <li><NavLink to="/" className={({ isActive }) => `nav-link px-2 fw-bold ${ isActive  ? "text-warning" : "text-white"}` }>Home</NavLink></li>
            <li><NavLink to="/book" className={({ isActive }) => `nav-link px-2 fw-bold ${ isActive ? "text-warning" : "text-white"}` }>Book</NavLink></li>
            <li><NavLink to="/team" className={({ isActive }) => `nav-link px-2 fw-bold ${ isActive ? "text-warning" : "text-white"}` }>Team</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => `nav-link px-2 fw-bold ${ isActive ? "text-warning" : "text-white"}` }>Contact</NavLink></li>
          </ul>
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">Register</button>
          </div>
        </div>
      </div>
    </header>
  )
}