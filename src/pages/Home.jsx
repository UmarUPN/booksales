import ProductList from "../components/ProductList";
import BookManager from "../components/BookManager"
import "./styles/Home.css";

import { Link, NavLink } from 'react-router';

export default function Home() {
    return (
        <>
            <HeroSection />
            <BookManager />
        </>
    )
}

function HeroSection() {
  return (
    <div className="container my-5">
      <div
        className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
      >
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Where Every Page Begins a New Possibility
          </h1>
          <p className="lead">
            Explore a curated world of stories, insights, and imagination—BookSales is your digital gateway to fiction, self-development, academic excellence, and beyond. Whether you're seeking inspiration, knowledge, or pure escapism, our collection is designed to empower every reader to discover, learn, and grow.
          </p>
          <div
            className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
          >
            <Link
              to="/book"
              className="btn btn-warning btn-lg px-4 me-md-2 fw-bold"
            >
              Discover
            </Link>
            <button
              type="button"
              className="btn btn-outline-dark btn-lg px-4"
            >
              Login
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src="src/assets/images/hero.jpg"
            alt=""
            width="720"
          />
        </div>
      </div>
    </div>
  )
}